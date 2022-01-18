const siteRouter = require('./sites');
const adminRouter = require('./admin');
const managerRouter = require('./manager');
const userRouter = require('./user');
const jwt = require('../middlewares/jwt');

function route(app) {

    app.use('/admin', adminRouter);

    app.use('/manager', managerRouter);

    app.use('/user', userRouter);

    app.use('/', siteRouter);
}

module.exports = route;