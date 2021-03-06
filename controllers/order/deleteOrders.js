const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Orders = db.getModel('Orders');
        const id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }
        await Orders.destroy({
            where: {
                id
            }
        });
        res.json({
            success: true,
            message: 'Order successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};