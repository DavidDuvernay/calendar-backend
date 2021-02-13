const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();


const {fieldValidator} = require('../middlewares/field-validator');
const { createUser, userLogin, revalidateToken } = require('../controllers/auth');



router.post(
    '/new', 
    [
        check('name', 'Cannot be empty').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password has to be more than 6 characters').isLength({min: 6}),
        fieldValidator
    ],
    createUser
)

router.post(
    '/',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password has to be more than 6 characters').isLength({min: 6}),
        fieldValidator
    ],
     userLogin     
);

router.get('/renew', revalidateToken)

module.exports = router;
