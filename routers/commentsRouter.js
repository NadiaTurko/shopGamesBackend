const router = require('express').Router();

const createComments =  require('../controllers/comments/createComments');
const deleteComments = require('../controllers/comments/deleteComments');
const findAllComments = require('../controllers/comments/findAllComments');
const findByIdComments = require('../controllers/comments/findByIdComments');
const updateComments = require('../controllers/comments/updateComments');


router.post('/', createComments);
router.get('/', findAllComments);
router.get('/:id', findByIdComments);
router.put('/:id', updateComments);
router.delete('/', deleteComments);

module.exports = router;