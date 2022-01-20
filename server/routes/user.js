const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');


router.get('/info', userController.info);

router.get('/payment', userController.payment);

router.get('/medicine', userController.medicine);

router.use('/history', userController.history);

router.get('/', userController.indexGET);

router.get('/cart', userController.cartGET);

router.post('/', userController.indexPOST);


module.exports = router;