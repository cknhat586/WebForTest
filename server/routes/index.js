const siteRouter = require('./sites');
const loginRouter = require('./login');
const jwt = require('../middlewares/jwt');

function route(app) {

    app.use('/login', loginRouter);
    
    app.use('/', jwt.verifyToken, siteRouter);
}

module.exports = route;