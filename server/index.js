const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require('./routes/index');

const PUBLIC_PATH = path.join(__dirname, '../public');
app.use(express.static(PUBLIC_PATH));

const app = express();

require("dotenv").config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 6788;

require('./middlewares/express-session')(app);
require('./middlewares/cookie-parser')(app);
require('./middlewares/express-handlebars')(app);
require('./middlewares/passport')(app);

route(app);

app.listen(PORT, function () {
  console.log(`Running port ${PORT}!!!!`);
});
