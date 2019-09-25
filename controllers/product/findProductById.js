let db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Product = db.getModel('Product');
        const id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        const findProductById = await Product.findOne({
            where: {
                id
            },
        });

        if (!findProductById) {
            throw new Error('Product with this id does not exist');
        }
        res.json({
            message: findProductById
        });
    } catch (e) {
        console.log(e);
        res.json(e.message)
    }
};