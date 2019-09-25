const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Category = db.getModel('Category');
        const id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }
        await Category.destroy({
            where: {
                id
            }
        });
        res.json({
            success: true,
            message: 'Category successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};