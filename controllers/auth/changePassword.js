const db  = require('../../dataBase').getInstance();
const tokenVerificator  = require('../../helpers/tokenVerificator').password;


module.exports = async (req, res) => {
    try{
        const UserModel = db.getModel('User');
        const {t: token} = req.query;
        const {id} = tokenVerificator(token);
        let {password, passwordCopy} = req.body;
              // const {id} = req.user;
        const isPresent = await UserModel.findByPk(id);
        if (!isPresent) throw new Error('User is not defined');
        if(password !== passwordCopy) throw new Error( 'Password is not equals');

        await  UserModel.update({password},
            {where: {id}});
        res.json({
            success: true,
            msg: 'OK'
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
