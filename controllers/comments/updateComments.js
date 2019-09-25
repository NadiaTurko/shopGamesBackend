const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Comments = db.getModel('Comments');
        const Id = req.params.id;
        if (!id) {
            throw new Error('No id');
        }

        const CommentsInfo = req.body;
        if (!CommentsInfo) {
            throw new Error('Body is empty');
        }

        const {id, autor, product_id} = CommentsInfo;
        if (!id || !autor || !product_id ) {
            throw new Error('Some fields are empty');
        }
        await Comments.update({
            id,
            autor,
            product_id
        }, {
            where: {
                id
            }
        });
        res.json({
            message: 'Category successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
};