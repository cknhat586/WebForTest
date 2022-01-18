class SiteController {

    indexGET(req, res) {
        res.redirect('login', '301');
    }

    indexPOST(req, res) {
        res.redirect('login', '301');
    }
}

module.exports = new SiteController;