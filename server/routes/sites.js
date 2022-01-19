const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');
const accountController = require('../controllers/AccountController');

router.get('/login', accountController.signinGET);

router.get('/signup', accountController.signupGET);


router.post('/login', accountController.signinPOST);

router.post('/signup', accountController.signupPOST);


router.use('/', siteController.index);

module.exports = router;