module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: {
                type: DataTypes.STRING
            },
            lastName: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING,
            },
            dateOfBirth: {
                type: DataTypes.DATE
            },
            sex_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            city: {
                type: DataTypes.STRING
            },
            country: {
                type: DataTypes.STRING
            },
            phone: {
                type: DataTypes.STRING
            },
        },
        {
            tableName: 'user',
            timestamps: false
        }
    );
    const Sex = sequelize.import('./Sex.js');
    User.belongsTo(Sex, {foreignKey: 'sex_id'});
    return User
};