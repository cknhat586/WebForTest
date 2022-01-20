const data = require('../connections/rawData');
Object.freeze(data);

class AdminController {

    indexGET(req, res) {
        console.log('admin home')
        return res.render('admin/adminHome');
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
            return res.redirect('/admin/managerList', '200', {
                list: newList
            });
        } else {
            return res.render('admin/managerList', {
                list: managerList
            });
        }
    }

    addManagerGET(req, res) {
        return res.render('admin/addManager');
    }

    addHospitalGET(req, res) {
        return res.render('admin/addHospital');
    }

    editHospitalGET(req, res) {
        const crrHospitalName = req.query.name;
        const db_data = data.hospitalList;
        let crrHospital;
        for (let i = 0; i < db_data.length; i++) {
            if (db_data[i].f_Name == crrHospitalName) {
                crrHospital = db_data[i];
                break;
            }
        }
        return res.render('admin/editHospital', {
            hospital: crrHospital
        });
    }

    managerHistoryGET(req, res) {
        const payload = req.query;
        console.log(payload.username)
        const managerName = 'Nguyen Huu Dien';
        const history = data.managerActionHistory;
        for (let i = 0; i < history.length; i++) {
            history[i].f_Date = (new Date(history[i].f_Date)).toLocaleString();
        }

        return res.render('admin/managerHistory', {
            manager: managerName,
            history: history
        });
    }

    hospitalListGET(req, res) {
        const hospitalList = data.hospitalList;
        let list = hospitalList;
        for (let i = 0; i < list.length; i++) {
            list[i].f_Current = (list[i].f_Current).toLocaleString();
            list[i].f_Max = (list[i].f_Max).toLocaleString();
        }
        return res.render('admin/hospitalList', {
            list: list
        });
    }

    addManagerPOST(req, res) {
        return res.render('admin/addManager');
    }

    addHospitalPOST(req, res) {
        return res.render('admin/addHospital');
    }

    editHospitalPOST(req, res) {
        return res.render('admin/editHospital');
    }
}

module.exports = new AdminController;