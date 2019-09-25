module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            category_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            title: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            image: {
                type: DataTypes.INTEGER,
            },
            price: {
                type: DataTypes.STRING,
            },
            accessibility: {
                type: DataTypes.STRING
            },
        },
        {
            tableName: 'product',
            timestamps: false
        }
    );
    const Category = sequelize.import('./Category.js');
    Product.belongsTo(Category, {foreignKey: 'category_id'});
    return Product
};