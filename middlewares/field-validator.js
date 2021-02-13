const express = require('express');
const {validationResult} = require('express-validator');


const fieldValidator = (req, res, next) => {

    const error = validationResult(req);

    if( !error.isEmpty()){
        return res.status(400).json({
            ok: false,
            error: error.mapped()
        })
    }
    
    next()
}

module.exports = {
    fieldValidator
}