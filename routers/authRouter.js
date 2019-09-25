const router = require('express').Router();

let authUser = require('../controllers/auth/authUser');
let changePassword = require('../controllers/auth/changePassword');
let sendChangeEmail = require('../controllers/auth/sendChangeEmail');

router.post('/user', authUser);
router.put('/user/password', changePassword);
router.post('/user/password', sendChangeEmail);

module.exports = router;
