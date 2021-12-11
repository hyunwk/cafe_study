var mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  port: '13306',
  user: 'caleb',
  password: 'khwkhsmom1@',
  database: 'join_place',
});

module.exports = db;
