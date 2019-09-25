const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Category = db.getModel('Category');
        const Id = req.params.id;
        if (!Id) {
            throw new Error('No id');
        }

        const CategoryInfo = req.body;
        if (!CategoryInfo) {
            throw new Error('Body is empty');
        }

        const {id, parentCategory, title} = CategoryInfo;
        if (!id || !parentCategory || !title )
        {
            throw new Error('Some fields are empty');
        }
        await Category.update({
            id,
            parentCategory,
            title
        }, {
            where: {
                id
            }
        });
        res.json({
            message: 'Category successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
};