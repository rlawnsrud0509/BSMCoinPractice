const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db_info = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
};

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("Connection Error : " + err);
      else console.log("DBconnection succeed");
    });
  },
};
