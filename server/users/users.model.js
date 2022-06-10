const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false},
        email: { type: DataTypes.STRING, allowNull: false},
        hash: { type: DataTypes.STRING, allowNull: false},
        role: { type: DataTypes.STRING, allowNull: false }
    }

    const options = {
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    }

    return sequelize.define('User', attributes, options);
}