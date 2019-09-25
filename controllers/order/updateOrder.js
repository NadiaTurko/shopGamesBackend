const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Orders = db.getModel('Orders');
        const Id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        const OrderInfo = req.body;
        if (!OrderInfo) {
            throw new Error('Body is empty');
        }

        const {id, user_id, category_id, static_id, orders_data, orders_time, price, coments} = OrderInfo;
        if (!id || !user_id || !category_id || !static_id || !orders_data || !orders_time || !price || !coments)
        {
            throw new Error('Some fields are empty');
        }
        await Orders.update({
            id,
            user_id,
            category_id,
            static_id,
            orders_data,
            orders_time,
            price,
            comments
        }, {
            where: {
                id
            }
        });
        res.json({
            message: 'Order successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
};