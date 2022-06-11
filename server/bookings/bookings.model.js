const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        room_id: { type: DataTypes.STRING, allowNull: false },
        startDate: { type: DataTypes.DATE, allowNull: false },
        endDate: { type: DataTypes.DATE, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        hasBeenPaid: { type: DataTypes.BOOLEAN, allowNull: false }
    }

    return sequelize.define('Hotel_Booking', attributes);
}