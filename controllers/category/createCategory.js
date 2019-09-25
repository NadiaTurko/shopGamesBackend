const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const CategoryModels = db.getModel('Category');
        const {id, parentCategory, title} = req.body;
        if (!id || !parentCategory || !title) {
            throw  new Error('Some field is empty!!!')
        }
        const insertedCategory = await CategoryModels.create({
            id,
            parentCategory,
            title
        });
        res.json({
            success: true,
            message: insertedCategory
        })
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};