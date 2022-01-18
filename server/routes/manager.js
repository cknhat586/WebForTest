const express = require('express');
const router = express.Router();

const managerController = require('../controllers/ManagerController');

router.get('/addUser', managerController.addUserGET);

router.get('/', managerController.indexGET);


router.post('/addUser', managerController.addUserPOST);

router.post('/', managerController.indexPOST);


module.exports = router;