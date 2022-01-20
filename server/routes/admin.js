const express = require('express');
const router = express.Router();

const adminController = require('../controllers/AdminController');

router.get('/managerList', adminController.managerListGET);

router.get('/addManager', adminController.addManagerGET);

router.get('/addHospital', adminController.addHospitalGET);

router.get('/managerHistory', adminController.managerHistoryGET);

router.get('/hospitalList', adminController.hospitalListGET);

router.get('/editHospital', adminController.editHospitalGET);

router.post('/addManager', adminController.addManagerPOST);

router.post('/addHospital', adminController.addHospitalPOST);

router.post('/editHospital', adminController.editHospitalPOST);

router.use('/', adminController.indexGET);

module.exports = router;