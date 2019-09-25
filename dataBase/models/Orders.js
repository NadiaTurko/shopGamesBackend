module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            category_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            static_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            orders_data: {
                type: DataTypes.DATE
            },
            orders_time: {
                type: DataTypes.TIME
            },
            price: {
                type: DataTypes.STRING
            },
            coments: {
                type: DataTypes.INTEGER,
            },
        },
        {
            tableName: 'orders',
            timestamps: false
        }
    );
    const User = sequelize.import('./User.js');
    Orders.belongsTo(User, {foreignKey: 'user_id'});

    const Status = sequelize.import('./Status.js');
    Orders.belongsTo(Status, {foreignKey: 'static_id'});
    return Orders
};