const {validationResult} = require('express-validator');

const createUser = (req, res) => {

    const {name, email, password} = req.body;

    if( name.length < 3 ){
        return res.status(400).json({
            ok: false,
            msg: 'Name has to more than 2 characters'
        })
    }
    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
};

const userLogin = (req, res) => {
    
    const {email, password} = req.body;

    const error = validationResult(req);

    if( !error.isEmpty()){
        return res.status(400).json({
            ok: false,
            error: error.mapped()
        })
    }
    
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
};

const revalidateToken = (req, res) => {
    
    res.json({
        ok: true,
        msg: 'renew'
    })
};

module.exports = {
    createUser,
    userLogin,
    revalidateToken,
}