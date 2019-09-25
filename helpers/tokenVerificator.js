const jwt = require('jsonwebtoken');
let {secret, passwordSecret} = require('../constants/secret');

module.exports = {

    auth: token => {
        if (!token) throw new Error('No token');
        let user = null;

        jwt.verify(token, secret, (err, decode) => {
            if (err) throw new Error('Not valid token');
            user = decode;
        });
        return user;
    },
    password: token => {
        if(!token) throw  new Error ('No token');
        let user = null;

        jwt.verify(token, passwordSecret, (err, decode) =>{
            if (err) throw new Error('Not valid token');
            user = decode
        });
        return user;
    },
};