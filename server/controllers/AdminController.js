const data = require('../connections/rawData');

class AdminController {

    indexGET(req, res) {
        console.log('admin home')
        res.render('admin/adminHome');
    }

    managerListGET(req, res) {
        const managerList = data.managerList;
        const payload = req.query;
        if (Object.keys(payload).length > 0) {
            let newList = managerList;
            for (let i = 0; i < newList.length; i++) {
                if (newList[i].f_Username == payload.username) {
                    if (payload.command == 'unlock') {
                        newList[i].f_isLocked = false;
                    } else {
                        newList[i].f_isLocked = true;
                    }

                    break;
                }
            }
            res.redirect('managerList', '200', {
                list: newList
            });
        } else {
            res.render('admin/managerList', {
                list: managerList
            });
        }
    }

    managerHistoryGET(req, res) {
        const payload = req.query;
        console.log(payload.username)
        const managerName = 'Nguyen Huu Dien';
        const history = data.managerActionHistory;
        for (let i = 0; i < history.length; i++) {
            history[i].f_Date = (new Date(history[i].f_Date)).toLocaleString();
        }

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