const express = require('express');
const router = express.Router();

const adminController = require('../controllers/AdminController');

router.get('/managerList', adminController.managerListGET);

router.get('/managerHistory', adminController.managerHistoryGET);

router.get('/hospitalList', adminController.hospitalListGET);

router.get('/', adminController.indexGET);


module.exports = router;