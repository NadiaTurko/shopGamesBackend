let db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Category = db.getModel('Category');
        const id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        const findCategoryById = await Category.findOne({
            where: {
                id
            },
        });

        if (!findCategoryById) {
            throw new Error('Category with this id does not exist');
        }
        res.json({
            message: findCategoryById
        });
    } catch (e) {
        console.log(e);
        res.json(e.message)
    }
};