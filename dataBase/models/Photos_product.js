module.exports = (sequelize, DataTypes) => {
    const Photos_product = sequelize.define('Photos_product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,

            },
            product_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            path: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            tableName: 'photos_product',
            timestamps: false
        }
    );
    const Product = sequelize.import('./Product.js');
    Photos_product.belongsTo(Product, {foreignKey: 'product_id'});
    return Photos_product
};
