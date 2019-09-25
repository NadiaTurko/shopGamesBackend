let db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Comments = db.getModel('Comments');
        const id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        const findCommentsById = await Comments.findOne({
            where: {
                id
            },
        });

        if (!findCommentsById) {
            throw new Error('Comments with this id does not exist');
        }
        res.json({
            message: findCommentsById
        });
    } catch (e) {
        console.log(e);
        res.json(e.message)
    }
};