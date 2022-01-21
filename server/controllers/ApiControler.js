const db = require("../connections/postgres");

class ApiControler {
  async users(req, res) {
    let users = await db.get("Users", "f_Permission", 0);

    res.status(200).send({
      items: users,
    });
  }

  async userId(req, res) {
    let user = await db.get("Users", "f_CMND", req.query.q);

    res.status(200).send({
      items: user[0],
    });
  }
}

module.exports = new ApiControler();
