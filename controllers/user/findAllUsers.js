const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const User = db.getModel('User');
        const findUser = await User.findAll({});
        if (!findUser) throw new Error('User not exist');

        res.json({
            message: findUser
        });
    } catch (e) {
        console.log(e);
        res.json(e.message);
    }
};