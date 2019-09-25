module.exports = (sequelize, DataTypes) => {
    const ProductByOrders = sequelize.define('ProductByOrders', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            product_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            orders_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            number: {
                type: DataTypes.INTEGER
            },
        },
        {
            tableName: 'productbyrders',
            timestamps: false
        }
    );
    const Product = sequelize.import('./Product.js');
    ProductByOrders.belongsTo(Product, {foreignKey: 'product_id'});

    const Orders = sequelize.import('./Orders.js');
    ProductByOrders.belongsTo(Orders, {foreignKey: 'orders_id'});

    return ProductByOrders
};