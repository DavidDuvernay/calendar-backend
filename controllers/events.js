const express = require('express')

const Event = require('../models/Event');


const getEvent = async(req, res) => {

    const event = await Event.find().populate('user', 'name');
  
    res.json({
        ok: true,
        event
    })
};

const createEvent = async (req, res) => {
    

    const event = new Event(req.body);

    try {
        event.user = req.uid;
        
        const savedEvent = await event.save();

        res.json({
            ok: true,
            event: savedEvent
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({
            ok: false,
            msg: 'Contact admin'
        })
    }
};

const updateEvent = async(req, res) => {

    const eventId = req.params.id;
    const uid = req.uid

    try {
        const event = await Event.findById(eventId);

        if(!event){
            return res.status(404).json({
                ok: false,
                msg: 'This event does not exists'
            })
        }

        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'Unauthorized to edit this event'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new: true});

        res.json({
            ok: true,
            event: updatedEvent
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({
            ok: false,
            msg: 'Contact admin'
        })
    }
};

const deleteEvent = async(req, res) => {

    const eventId = req.params.id;
    const uid = req.uid

    try {
        const event = await Event.findById(eventId);

        if(!event){
            return res.status(404).json({
                ok: false,
                msg: 'This event does not exists'
            })
        }

        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'Unauthorized to delete this event'
            })
        }

        await Event.findByIdAndDelete(eventId)

        res.json({
            ok: true,
            msg: `Event ${eventId} deleted`
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({
            ok: false,
            msg: 'Contact admin'
        })
    }
};

module.exports= {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}