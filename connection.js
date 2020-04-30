const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "192.168.0.199",
  user: "it-dept",
  password: "anastesi",
  database: "ticket",
});

connection.connect();

module.exports = connection;
