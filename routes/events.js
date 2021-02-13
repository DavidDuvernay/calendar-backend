const { Router } = require('express');

const { check } = require('express-validator');

const {validateJWT} = require('../middlewares/validateJWT');
const {fieldValidator} = require('../middlewares/field-validator');
const {getEvent, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const {isDate} = require('../helpers/isDate');


const router = Router();

router.use(validateJWT)

router.get('/', getEvent)

router.post(
    '/', 
    [
        check('title', 'Title can not be empty').not().isEmpty(),
        check('start', 'Start date is mandatory').custom(isDate),
        check('end', 'End date is mandatory').custom(isDate),
        fieldValidator
    ],
    createEvent
 )

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router;