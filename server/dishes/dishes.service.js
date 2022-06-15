const config = require('config.json');
const db = require('helpers/db');

module.exports = {
    getAllDishes,
    getDishById,
    createDish,
    updateDish,
    deleteDish: _deleteDish
}

async function getAllDishes() {
    return await db.Dish.findAll();
}

async function getDishById(id) {
    return await getDish(id);
}

async function createDish(params) {
    await db.Dish.create(params);
}

async function updateDish(id, params) {
    const dish = await getDish(id);

    Object.assign(dish, params);
    await dish.save();
    return dish;
}

async function _deleteDish(id) {
    const dish = await getDish(id);
    await dish.destroy();
}

// helper functions

async function getDish(id) {
    const dish = await db.Dish.findByPk(id);
    if (!dish) throw 'Dish not found';
    return dish;
}