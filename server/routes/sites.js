const express = require("express");
const router = express.Router();

const siteController = require("../controllers/SiteController");
const normalUserController = require("../controllers/NormalUserController");

router.get("/", siteController.indexGET);

router.get("/dashboard", siteController.dashboard);

router.get("/user", siteController.user);

router.get("/location", siteController.location);

router.get("/food", siteController.food);

router.get("/medicine", siteController.medicine);

router.post("/", siteController.indexPOST);

router.post("/login", siteController.indexPOST);

//----------------
router.get("/profile", normalUserController.user);
router.get("/history", normalUserController.history);
router.get("/necessities", normalUserController.necessities);
router.get("/payment", normalUserController.payment);

module.exports = router;
