const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const User = db.getModel('User');
        const id_user = req.params.id;
        if (!id_user) {
            throw new Error('No id');
        }

        const UserInfo = req.body;
        if (!UserInfo) {
            throw new Error('Body is empty');
        }

        const {id, firstName, lastName, email, password, dateOfBirth, city, country, phone} = UserInfo;
        if (!id || !firstName || !lastName || !email || !password || !dateOfBirth || !city || !country || !phone )
        {
            throw new Error('Some fields are empty');
        }
        await User.update({
            id,
            firstName,
            lastName,
            email,
            password,
            dateOfBirth,
            city,
            country,
            phone
        }, {
            where: {
                id
            }
        });
        res.json({
            message: 'User successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
};