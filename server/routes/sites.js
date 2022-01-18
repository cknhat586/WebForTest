const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');
const accountController = require('../controllers/AccountController');

router.get('/login', accountController.signinGET);

router.get('/', siteController.indexGET);


router.post('/login', accountController.signinPOST);

router.post('/', siteController.indexPOST);


module.exports = router;