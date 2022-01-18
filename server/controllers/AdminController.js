class AdminController {

    indexGET(req, res) {
        res.render('login');
    }

    managerHistoryGET(req, res) {
        res.render('admin/managerHistory');
    }
}

module.exports = new AdminController;