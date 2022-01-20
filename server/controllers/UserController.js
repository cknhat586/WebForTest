const rawData = require('../connections/rawData');

class UserController {

    indexGET(req, res) {
        res.redirect('/user/dashboard');
    }

    indexPOST(req, res) {
        res.render('user/dashboard', { layout: "dashboard", activeDashboard: true} );
    }

    dashboard(req, res) {
        res.render('user/dashboard', { layout: "dashboard", activeDashboard: true} );
    }

    info(req, res) {
        const userData = rawData.userInfo;
        console.log(userData);
        res.render('user/info', { 
            layout: "dashboard",
            data: userData,
            activeUser: true 
        });
    }

    medicine(req, res) {
        res.render('user/medicine', { layout: "dashboard", activeMedicine: true });
    }

    location(req, res) {
        res.render('user/location', { layout: "dashboard", activeLocation: true });
    }

    food(req, res) {
        res.render('user/food', { layout: "dashboard", activeFood: true });
    }   

}

module.exports = new UserController;