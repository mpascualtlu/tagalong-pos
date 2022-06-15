const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('middleware/validate-request');
const authorize = require('middleware/authorize');
const dishService = require('./dishes.service');

router.post('/open-api/create-dish', createDishSchema, createDish);
router.post('/create-dish', authorize(), createDishSchema, createDish);

router.get('/open-api', getAllDishes);
router.get('/open-api/:id', getDishById);
router.put('/open-api/:id', updateDishSchema, updateDish);
router.delete('/open-api/:id', _deleteDish);

router.get('/', authorize(), getAllDishes);
router.get('/:id', authorize(), getDishById);
router.put('/:id', authorize(), updateDishSchema, updateDish);
router.delete('/:id', authorize(), _deleteDish);

module.exports = router;

function createDishSchema(req, res, next) {
    const schema = Joi.object({
        dish_name: Joi.string().required(),
        description: Joi.string().empty(''),
        price: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function createDish(req, res, next) {
    dishService.createDish(req.body)
    .then(() => res.json({ message: 'Dish created' }))
    .catch(next);
}

function getAllDishes(req, res, next) {
    dishService.getAllDishes()
    .then(dishes => res.json(dishes))
    .catch(next);
}

function getDishById(req, res, next) {
    dishService.getDishById(req.params.id)
    .then(dish => res.json(dish))
    .catch(next);
}

function updateDishSchema(req, res, next) {
    const schema = Joi.object({
        dish_name: Joi.string().empty(''),
        description: Joi.string().empty(''),
        price: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

function updateDish(req, res, next) {
    dishService.updateDish(req.params.id, req.body)
    .then(dish => res.json(dish))
    .catch(next);
}

function _deleteDish(req, res, next) {
    dishService.deleteDish(req.params.id)
    .then(() => res.json({ message: 'Dish deleted successfully' }))
    .catch(next);
}