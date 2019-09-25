const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Category = db.getModel('Category')
        const findCategory = await Category.findAll({});
        if(!findCategory) {
            throw new Error('Category do not exist');
        }

        res.json({
            message: Category
        })
    } catch (e) {
        console.log(e);
        res.json(e.message);
    }
};