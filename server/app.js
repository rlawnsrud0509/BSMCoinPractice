const express = require("express");
const db = require("./utils/mysql");
const redis = require("./utils/redis");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const conn = db.init();

app.use(bodyParser.json());
app.use(cors());

app.listen(8080, () => {
  console.log("서버켜짐");
});
