const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 6788;

app.listen(PORT, function () {
  console.log(`Running port ${PORT}!!!!`);
});
