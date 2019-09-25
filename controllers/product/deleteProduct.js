const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Product = db.getModel('Product');
        const id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        await Product.destroy({
            where: {
                id
            }
        });
        res.json({
            success: true,
            message: 'Product successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};