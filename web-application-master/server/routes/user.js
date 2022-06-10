const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.get('/dashboard', userController.dashboard);

router.get('/user', userController.user);

router.get('/location', userController.location);

router.get('/food', userController.food);

router.get('/medicine', userController.medicine);

router.get('/', userController.indexGET);


router.post('/', userController.indexPOST);


module.exports = router;