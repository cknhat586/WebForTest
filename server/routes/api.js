const express = require("express");
const router = express.Router();

const apiControler = require("../controllers/ApiControler");

router.get("/users", apiControler.users);
router.get("/user/id", apiControler.userId);

module.exports = router;
