const rawData = require('../connections/rawData');
const fullname = 'USER';
class UserController {

    indexGET(req, res) {
        res.redirect('/user/info');
    }

    indexPOST(req, res) {
        res.redirect('/user/info');
    }

    info(req, res) {
        const userData = rawData.userInfo;
        const hospitalList = rawData.hospitalList;
        let hospital;
        for (let i = 0; i < hospitalList.length; i++) {
            if (userData.f_Hospital == hospitalList[i].f_Name) {
                hospital = hospitalList[i];
                break;
            }
        }
        //const fullname = req.user.f_Username;
        return res.render('user/info', { 
            layout: "dashboard",
            Fullname: fullname,
            user: userData,
            hospital: hospital,
            activeUser: true 
        });
    }

    medicine(req, res) {
        //const fullname = req.user.f_Username;
        const medicineList = rawData.medicineList;
        res.render('user/medicine', { 
            layout: "dashboard",
            Fullname: fullname,
            list: medicineList,
            activeMedicine: true
        });
    }

    cartGET(req, res) {
        res.render('user/cart', {
            layout: "dashboard"
        });
    }

    payment(req, res) {
        //const fullname = req.user.f_Username;
        res.render('user/payment', { 
            layout: "dashboard",
            Fullname: fullname,
            activePayment: true
        });
    }

    history(req, res) {
        //const fullname = req.user.f_Username;
        res.render('user/history', {
            layout: "dashboard",
            Fullname: fullname,
            activeHistory: true
        })
    }

}

module.exports = new UserController;