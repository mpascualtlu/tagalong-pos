const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        dish_name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.STRING, allowNull: false }
    }

    return sequelize.define('Dish', attributes);
}