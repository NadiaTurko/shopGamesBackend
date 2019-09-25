let db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const User = db.getModel('User');
        const id = req.params.id;
        if (!id) throw new Error('No id');

        const findUserById = await User.findOne({
            where: {
                id
            },
        });

        if (!findUserById) throw new Error('User with this id does not exist');
        res.json({
            message: findUserById
        });
    } catch (e) {
        console.log(e);
        res.json(e.message)
    }
};