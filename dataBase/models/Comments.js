module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            author: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            product_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
        },
        {
            tableName: 'comments',
            timestamps: false
        }
    );
    const Product = sequelize.import('./Product.js');
    Comments.belongsTo(Product, {foreignKey: 'product_id'});

    const User = sequelize.import('./User.js');
    Comments.belongsTo(User, {foreignKey: 'author'});

    return Comments
};