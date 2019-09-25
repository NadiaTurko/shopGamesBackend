let db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Orders = db.getModel('Orders');
        const id = req.params.id;
        if (!id) throw new Error('No id');

        const findOrdersById = await Orders.findOne({
            where: {
                id
            },
        });

        if (!findOrdersById) throw new Error('Orders with this id does not exist');
        res.json({
            message: findOrdersById
        });
    } catch (e) {
        console.log(e);
        res.json(e.message)
    }
};