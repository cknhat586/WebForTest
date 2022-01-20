class SiteController {
  index(req, res) {
    res.redirect("/login");
  }
}

module.exports = new SiteController();
