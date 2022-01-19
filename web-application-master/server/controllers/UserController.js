class UserController {

    indexGET(req, res) {
        res.render('user/dashboard', { layout: "dashboard", activeDashboard: true} );
    }

    indexPOST(req, res) {
        res.render('user/dashboard', { layout: "dashboard", activeDashboard: true} );
    }

    dashboard(req, res) {
        res.render('user/dashboard', { layout: "dashboard", activeDashboard: true} );
    }

    user(req, res) {
        res.render('user/user', { layout: "dashboard", activeUser: true });
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