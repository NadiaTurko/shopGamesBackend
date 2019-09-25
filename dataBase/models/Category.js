module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            parentCategory: {
                type: DataTypes.INTEGER
            },
            title: {
                type: DataTypes.STRING
            },
        },
        {
            tableName: 'category',
            timestamps: false
        }
    );

    return Category
};