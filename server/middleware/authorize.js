const { expressjwt }= require('express-jwt');
const jwt = require('jsonwebtoken');
const { secret } = require('config.json');
const db = require('helpers/db');

module.exports = authorize;

function authorize() {
    return [
        expressjwt({ secret, algorithms: ['HS256'] }),

        async(req, res, next) => {
            // const token = req.cookie.token;
            // console.log("Token:", token);
            //await console.log(req.user)
            // const user = await db.User.findByPk(req.user.sub);

            // if (!user) {
            //     return res.status(401).json({ message: 'Unauthorized' });
            // }

            // req.user = user.get();
            next();
        }
    ]
}