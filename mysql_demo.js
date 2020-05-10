let mysql = require('mysql');
exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'shaozhun',
  password: '888888',
  port: '3306',
  database: 'shaozhun'
});