const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    const { host, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, user, password, database });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql', host: host });

    db.User = require('../users/users.model')(sequelize);
    db.Customer = require('../customers/customers.model')(sequelize);
    db.Dish = require('../dishes/dishes.model')(sequelize);

    await sequelize.sync();
}