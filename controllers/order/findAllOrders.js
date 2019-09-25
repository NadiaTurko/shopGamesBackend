const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Orders = db.getModel('Orders');
        const findOrder = await Orders.findAll({});
        if (!findOrder) {
            throw new Error('Order not exist');
        }

        res.json({
            message: findOrder
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
};