const siteRouter = require("./sites");
const adminRouter = require("./admin");
const managerRouter = require("./manager");
const userRouter = require("./user");
const apiRouter = require("./api");
const jwt = require("../middlewares/jwt");

const verifyToken = jwt.verifyToken;

function route(app) {
  app.use("/api", apiRouter);

  app.use("/admin", adminRouter);

  app.use("/manager", managerRouter);

  app.use("/user", verifyToken, userRouter);

  app.use("/", siteRouter);
}

module.exports = route;
