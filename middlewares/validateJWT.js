const jwt = require('jsonwebtoken');


const validateJWT = (req, res, next) => {

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Missing token'
        })
    }

    try {
        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

        req.uid = uid;
        req.name = name;

    } catch (err) {
        res.status(401).json({
            ok: false,
            msg: 'Missing token'
        })
    }
    
    next()
};

module.exports = {
    validateJWT
};