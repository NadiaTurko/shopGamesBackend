const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Product = db.getModel('Product');
        const Id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        const ProductInfo = req.body;
        if (!ProductInfo) {
            throw new Error('Body is empty');
        }

        const {id, category_id, title, description, image, price, accessibility} = ProductInfo;
        if (!id || !category_id || !title || !description || !image || !price || !accessibility )
        {
            throw new Error('Some fields are empty');
        }
        await Product.update({
            id,
            category_id,
            title,
            description,
            image,
            price,
            accessibility
        }, {
            where: {
                id
            }
        });
        res.json({
            message: 'Product successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
};