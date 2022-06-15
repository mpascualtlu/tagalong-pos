const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        first_name: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: false },
        total_visit: { type: DataTypes.INTEGER, allowNull: false },
        total_visit: { type: DataTypes.DECIMAL, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: false },
        age: { type: DataTypes.INTEGER, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
    }

    return sequelize.define('Customer', attributes);
}