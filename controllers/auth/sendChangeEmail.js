const db = require('../../dataBase').getInstance();
const sendEmail = require('../../helpers/sendEmailChangePassword');
const ControllerError = require('../../error/ControllerError');
const tokenVerificator = require('../../helpers/tokenVerificator').auth;

module.exports = async (req, res, next) => {
    try {
        const UserModel = db.getModel('User');
        const token = req.get('Authorization');
        const {id, firstName} =tokenVerificator(token) ;
        const isPresent = await UserModel.findOne({
            where: {
                id, firstName
            }
        });
        if (!isPresent) throw new Error('User is not present');

        const info = await sendEmail(id);

        res.json({
            success: true,
            msg: info
        })
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'sendChangeEmail'))
    }
};

