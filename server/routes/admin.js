const express = require('express');
const router = express.Router();

const adminController = require('../controllers/AdminController');

router.get('/managerHistory', adminController.managerHistoryGET);

router.get('/', adminController.indexGET);


module.exports = router;