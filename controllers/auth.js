const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const {generateJWT} = require('../helpers/jwt');


const createUser = async(req, res) => {
    
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email})
        
        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'This email is already in use'
            })
        }

        user = new User(req.body)

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        await user.save();

        const token = await generateJWT(user.id, user.name);        

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })    
    } catch (error) {
        console.log(error)        
        res.status(500).json({
            ok: false,
            msg: 'Please contact provider'
        })
    }

};

const userLogin = async(req, res) => {
    
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email})
        
        if(!user){
            return res.status(400).json({
                ok: false,
                msg: 'bad email'
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Bad password'
            })
        }

        const token = await generateJWT(user.id, user.name);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log(error)        
        res.status(500).json({
            ok: false,
            msg: 'Please contact provider'
        })
    }

    const error = validationResult(req);

    if( !error.isEmpty()){
        return res.status(400).json({
            ok: false,
            error: error.mapped()
        })
    }
};

const revalidateToken = async(req, res) => {
    
    const {uid, name} = req;
    const token = await generateJWT(uid, name);
    
    res.json({
        ok: true,
        token
    })
};

module.exports = {
    createUser,
    userLogin,
    revalidateToken,
}