const config = require('config.json');
const db = require('helpers/db');

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer: _deleteCustomer
}

async function getAllCustomers() {
    return await db.Customer.findAll();
}

async function getCustomerById(id) {
    return await getCustomer(id);
}

async function createCustomer(params) {
    await db.Customer.create(params);
}

async function updateCustomer(id, params) {
    const customer = await getCustomer(id);

    Object.assign(customer, params);
    await customer.save();
    return customer;
}

async function _deleteCustomer(id) {
    const customer = await getCustomer(id);
    await customer.destroy();
}

// helper functions

async function getCustomer(id) {
    const customer = await db.Customer.findByPk(id);
    if (!customer) throw 'Customer not found';
    return customer;
}