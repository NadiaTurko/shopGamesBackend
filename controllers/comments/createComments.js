const db = require('../../dataBase').getInstance();

module.exports = async (req,res)=>{
    try {
        const Comments = db.getModel('Comments');

        const CommentsInfo = req.body;

        if(!CommentsInfo) {
            throw new Error('Body is empty');
        }

        const {id, author, product_id} = OrderInfo;

        if (!id || !author || !product_id )
        { throw new Error('Some fields are empty');
        }

        await Orders.create({
            id,
            author,
            product_id,
        });

        res.json({
            message: 'Order successfully accepted'
        });
    }catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
};