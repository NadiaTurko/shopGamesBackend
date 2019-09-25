const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Product = db.getModel('Product');
        const findProduct = await Product.findAll({});
        if (!findProduct) {
            throw new Error('Product not exist');
        }

        res.json({
            message: findProduct
        });
    } catch (e) {
        console.log(e);
        res.json(e.message);
    }
};