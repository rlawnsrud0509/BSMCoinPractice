const express = require("express");
const db = require("./config/dbconnect");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const conn = db.init();

app.use(bodyParser.json());
app.use(cors());

app.listen(8080);
