const mysql = require('mysql2');
//require('dotenv').config();
   
// create the connection to database
const db = mysql.createConnection({
  host: "localhost",
  port: "3386",
  user: "root",
  password: "AlanDev511214!",
  database: "iwdcminicore"
});
  
module.exports = db;