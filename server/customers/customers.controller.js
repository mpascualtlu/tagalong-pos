const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('middleware/validate-request');
const authorize = require('middleware/authorize');
const customerService = require('./customers.service');

router.post('/open-api/create-customer', createCustomerSchema, createCustomer);
router.post('/create-customer', authorize(), createCustomerSchema, createCustomer);

router.get('/open-api', getAllCustomers);
router.get('/open-api/:id', getCustomerById);
router.put('/open-api/:id', updateCustomerSchema, updateCustomer);
router.delete('/open-api/:id', _deleteCustomer);

router.get('/', authorize(), getAllCustomers);
router.get('/:id', authorize(), getCustomerById);
router.put('/:id', authorize(), updateCustomerSchema, updateCustomer);
router.delete('/:id', authorize(), _deleteCustomer);

module.exports = router;

function createCustomerSchema(req, res, next) {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.int().required(),
        total_visit: Joi.int().required(),
        total_decimal: Joi.decimal().required(),
        gender: Joi.string().required(),
        age: Joi.int().required(),
        location: Joi.string().required(),
        last_name: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function createCustomer(req, res, next) {
    customerService.createCustomer(req.body)
    .then(() => res.json({ message: 'Customer created' }))
    .catch(next);
}

function getAllCustomers(req, res, next) {
    customerService.getAllCustomers()
    .then(customers => res.json(customers))
    .catch(next);
}

function getCustomerById(req, res, next) {
    customerService.getCustomerById(req.params.id)
    .then(customer => res.json(customer))
    .catch(next);
}

function updateCustomerSchema(req, res, next) {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        total_visit: Joi.int().required(),
        total_decimal: Joi.decimal().required(),
        gender: Joi.string().required(),
        age: Joi.int().required(),
        location: Joi.string().required(),
        last_name: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function updateCustomer(req, res, next) {
    customerService.updateCustomer(req.params.id, req.body)
    .then(customer => res.json(customer))
    .catch(next);
}

function _deleteCustomer(req, res, next) {
    customerService.deleteCustomer(req.params.id)
    .then(() => res.json({ message: 'Customer deleted successfully' }))
    .catch(next);
}