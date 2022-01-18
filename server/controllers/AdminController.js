const data = require('../connections/rawData');

class AdminController {

    indexGET(req, res) {
        res.render('admin/adminHome');
    }

    managerListGET(req, res) {
        res.render('admin/managerList');
    }

    managerHistoryGET(req, res) {
        const managerName = 'Nguyen Huu Dien';
        const history = data.managerActionHistory;
        for (let i=0; i< history.length; i++) {
            history[i].f_Date = (new Date(history[i].f_Date)).toLocaleString();
        }
        console.log(history);
        res.render('admin/managerHistory', {
            manager: managerName,
            history: history
        });
    }

    hospitalListGET(req, res) {
        res.render('admin/hospitalList');
    }
}

module.exports = new AdminController;