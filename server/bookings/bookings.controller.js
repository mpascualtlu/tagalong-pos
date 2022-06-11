const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('middleware/validate-request');
const authorize = require('middleware/authorize');
const bookingService = require('./bookings.service');

router.post('/add-booking', authorize(), createBooking);
router.get('/get-booking', authorize(), getBooking);
router.put('/:id', authorize(), updateBooking);
router.delete('/:id', authorize(), deleteBooking);

module.exports = router;

function createBooking(req, res, next) {
    bookingService.createBooking(req.body)
    .then(() => res.json({ message: 'Booking created '}))
    .catch(next);
}

function getBooking(req, res, next) {
    bookingService.getBooking(req.params.id)
    .then(booking => res.json(booking))
    .catch(next);
}

function updateBooking(req, res, next) {
    bookingService.updateBooking(req.params.id, req.body)
    .then(booking => res.json(booking))
    .catch(next);
}

function deleteBooking(req, res, next) {
    bookingService.deleteBooking(req.params.id)
    .then(() => res.json({ message: 'Booking deleted successfully' }))
    .catch(next);
}