const { Router } = require('express');
const { check } = require('express-validator');


const router = Router();

const { createUser, userLogin, revalidateToken } = require('../controllers/auth');


router.post(
    '/new', 
    [
        check('name', 'Cannot be empty').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password has to be more than 6 characters').isLength({min: 6})
    ],
    createUser
)

router.post(
    '/',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password has to be more than 6 characters').isLength({min: 6})
    ],
     userLogin     
);

router.get('/renew', revalidateToken)

module.exports = router;
