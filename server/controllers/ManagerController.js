class ManagerController {

    indexGET(req, res) {
        res.render('login');
    }

    addUserGET(req, res) {
        res.render('manager/addUser');
    }

    indexPOST(req, res) {

    }

    addUserPOST(req, res) {
        res.render('manager/addUser');
    }
}

module.exports = new ManagerController;