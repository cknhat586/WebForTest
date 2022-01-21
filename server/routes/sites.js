const express = require("express");
const router = express.Router();

const siteController = require("../controllers/SiteController");
const normalUserController = require("../controllers/NormalUserController");
const accountController = require("../controllers/AccountController");

router.use("/logout", accountController.logout);

router.get("/login", accountController.signinGET);

router.get("/signup", accountController.signupGET);

router.post("/login", accountController.signinPOST);

router.post("/signup", accountController.signupPOST);

//----------------
router.get("/profile", normalUserController.user);
router.get("/history", normalUserController.history);
router.get("/necessities", normalUserController.necessities);
router.get("/payment", normalUserController.payment);
router.get("/combo", normalUserController.combo);
router.post("/combo", normalUserController.buyCombo);
router.post("/changePassword", normalUserController.changePassword);

router.use("/", siteController.index);

module.exports = router;
