const db = require('../../dataBase').getInstance();
//const roles = require('../../constants/roles');

module.exports = async (req, res) => {
    try {
        const UserModels = db.getModel('User');
        let {firstName, lastName, email, password, dateOfBirth, sex, city, country, phone} = req.body;
        if (!firstName || !lastName || !email || !password || !dateOfBirth || !sex || !city || !country || !phone) {
            throw new Error('Some field is empty');
        }

        const insertedUser = await UserModels.create({
            firstName,
            lastName,
            email,
            password,
            dateOfBirth,
            sex,
            city,
            country,
            phone,
        //    roles: roles.Client
        });
        res.json({
            success: true,
            msg: insertedUser
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};