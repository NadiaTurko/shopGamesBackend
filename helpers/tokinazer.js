const jwt = require('jsonwebtoken');
const {secret, passwordSecret} = require('../constants/secret');

module.exports.auth = data => jwt.sign(data, secret, {expiresIn: '30d'});
module.exports.password = data => jwt.sign(data, passwordSecret, {expiresIn: '1d'});
