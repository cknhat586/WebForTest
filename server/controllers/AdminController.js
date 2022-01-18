class AdminController {

    indexGET(req, res) {
        res.render('admin/adminHome');
    }

    managerListGET(req, res) {
        res.render('admin/managerList');
    }

    managerHistoryGET(req, res) {
        res.render('admin/managerHistory');
    }

    hospitalListGET(req, res) {
        res.render('admin/hospitalList');
    }
}

module.exports = new AdminController;