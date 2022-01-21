const userModel = require('../models/User');
const bcrypt = require('../middlewares/bcrypt');

class ManagerController {
  indexGET(req, res) {
    res.render("manager/managerHome");
  }

  addUserGET(req, res) {
    res.render("manager/addUser");
  }

  listPatientGET(req, res) {
    res.render("manager/listPatient");
  }

  listTrantiensyGET(req, res) {
    res.render("manager/trantiensy");
  }

  listCaokimnhatGET(req, res) {
    res.render("manager/caokimnhat");
  }

  listVoxuanvinhGET(req, res) {
    res.render("manager/voxuanvinh");
  }

  listNguyenhuudienGET(req, res) {
    res.render("manager/nguyenhuudien");
  }

  listTrantuanvuGET(req, res) {
    res.render("manager/trantuanvu");
  }

  indexPOST(req, res) {}

  addUserPOST(req, res) {
    const payload = req.body;
    console.log(payload);
    const newUserPassword = bcrypt.encrypt('123456');
    const user = {
      f_ID: 10,
      f_Fullname: payload.fullname,
      f_Username: payload.cmnd,
      f_Password: newUserPassword,
      f_CMND: payload.cmnd,
      f_SDT: payload.sdt,
      f_YOB: payload.year,
      f_Address: payload.address,
      f_State: payload.state,
      f_Hospital: payload.hospital,
      f_Linked: 0,
      f_Permission: 0
    }
    try {
      const rs = userModel.add(user);
    } catch (err) {
      console.error(err);
    }
    return res.redirect("/manager");
  }
}

module.exports = new ManagerController();
