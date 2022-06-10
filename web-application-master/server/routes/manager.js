const express = require("express");
const router = express.Router();

const managerController = require("../controllers/ManagerController");

router.get("/addUser", managerController.addUserGET);

router.get("/listPatient", managerController.listPatientGET);

router.get("/listPatient/trantiensy", managerController.listTrantiensyGET);

router.get("/listPatient/caokimnhat", managerController.listCaokimnhatGET);

router.get("/listPatient/voxuanvinh", managerController.listVoxuanvinhGET);

router.get(
  "/listPatient/nguyenhuudien",
  managerController.listNguyenhuudienGET
);

router.get("/listPatient/trantuanvu", managerController.listTrantuanvuGET);

router.get("/", managerController.indexGET);

router.post("/addUser", managerController.addUserPOST);

router.post("/", managerController.indexPOST);

module.exports = router;
