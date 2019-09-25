const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const ProductModels = db.getModel('Product');
        const PhotosProductModels = db.getModel('Photos_product');
        const {category_id, title, description, image, price, accessibility} = req.body;
        const {photo} = req.files;

        if( !category_id || !title || !description || !image || !price || !accessibility)  {
            throw new Error('Some field is empty');
        }
        const insertedProduct = await ProductModels.create({
            category_id,
            title,
            description,
            image,
            price,
            accessibility,
        });
        const {id} = insertedProduct.dataValues;

        await PhotosProductModels.create({
            product_id: id,
            path: photo[0].path
        });
        res.json({
            success: true,
            message: insertedProduct
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
