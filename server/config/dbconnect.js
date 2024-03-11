const mysql = require("mysql2");
const db_info = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "unreal_investment",
};

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("엄 : " + err);
      else console.log("디비연결완료 꺌꺌꺌");
    });
  },
};
