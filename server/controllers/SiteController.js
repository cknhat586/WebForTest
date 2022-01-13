class SiteController {

    indexGET(req, res) {
        res.render('login');
    }

    indexPOST(req, res) {
        res.render('login');
    }

    dashboard(req, res) {
        res.render('dashboard', { layout: "dashboard", activeDashboard: true} );
    }

    user(req, res) {
        res.render('user', { layout: "dashboard", activeUser: true });
    }

    medicine(req, res) {
        res.render('medicine', { layout: "dashboard", activeMedicine: true });
    }

    location(req, res) {
        res.render('location', { layout: "dashboard", activeLocation: true });
    }

    food(req, res) {
        res.render('food', { layout: "dashboard", activeFood: true });
    }   
}

module.exports = new SiteController;