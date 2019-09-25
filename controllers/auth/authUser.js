let db = require('../../dataBase').getInstance();
let tokenizer = require ('../../helpers/tokinazer').auth;


module.exports = async (req, res) => {
    try{
        const UserModel = db.getModel('User');
        const {email = '', password = ''} =req.body;
        if (!email || !password) throw  new Error('No login / password!!!');

        const  isPresent = await UserModel.findOne({
            where: {
                email,
                password
            }
        });

        if (!isPresent) throw  new Error('You are not register');

        const {id, firstName, city} = isPresent;
        let token = tokenizer({id, firstName, city});
        res.json({
            success : true,
            accessToken: token})
    }catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
