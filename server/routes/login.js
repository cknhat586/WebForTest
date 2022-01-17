const express = require('express');
const router = express.Router();

const accountController = require('../controllers/AccountController');

router.get('/', accountController.signinGET);

router.post('/', accountController.signinPOST);

module.exports = router;