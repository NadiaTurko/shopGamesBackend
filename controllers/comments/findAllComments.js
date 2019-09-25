const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Comments = db.getModel('Comments')
        const findComments = await Comments.findAll({});
        if(!findComments) {
            throw new Error('Comments do not exist');
        }

        res.json({
            message: Comments
        })
    } catch (e) {
        console.log(e);
        res.json(e.message);
    }
};