var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Derteano007!",
      database: "burgers_db"
  });
}

// ===== MAKING CONNECTION =====
connection.connect(function (err) {
  if (err) {
    console.error("connection error: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//  ===== EXPORT CONNECTION FOR OUR ORM TO USE =====
module.exports = connection;