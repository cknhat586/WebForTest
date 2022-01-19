class ManagerController {
  indexGET(req, res) {
    res.render("login");
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
    res.render("manager/addUser");
  }
}

module.exports = new ManagerController();
