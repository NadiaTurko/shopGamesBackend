const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Comments = db.getModel('Comments');
        const id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        await Comments.destroy({
            where: {
                id
            }
        });
        res.json({
            success: true,
            message: 'Comments successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};