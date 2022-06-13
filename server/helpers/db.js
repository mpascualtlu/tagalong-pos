const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    const { host, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, user, password, database });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    db.User = require('../users/users.model')(sequelize);
    db.Hotel_Booking = require('../bookings/bookings.model')(sequelize);

    await sequelize.sync();
}