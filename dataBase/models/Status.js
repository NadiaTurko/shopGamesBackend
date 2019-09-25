module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_status: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'status',
        timestamps: false
    });

    return Status
};