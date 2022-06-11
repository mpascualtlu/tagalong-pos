const db = require('helpers/db');

module.exports = {
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking
}

async function createBooking(params) {
    await db.Hotel_Booking.create(params);
}

// get all bookings from one hotel or the other

async function getBooking(id) {
    const booking = db.Hotel_Booking.findByPk(id);
    if (!booking) throw 'Booking not found';
    return booking;
}

async function updateBooking(id, params) {
    const booking = await getBooking(id);
    
    Object.assign(booking, params);
    await booking.save();
    return booking.get();
}

async function deleteBooking(id) {
    const booking = await getBooking(id);
    await booking.destroy();
}