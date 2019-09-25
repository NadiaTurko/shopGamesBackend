const router = require('express').Router();

let createUser = require('../controllers/user/createUser');
const findAllUser = require('../controllers/user/findAllUsers');
const findUserById = require('../controllers/user/findByIdUser');

router.post('/', createUser);
router.get('/', findAllUser);
router.get('/:id', findUserById);


module.exports = router;
