// import mysql2
const mysql = require('mysql2');
require('dotenv').config();

// create a db connection we can export
const db = mysql.createConnection(
    {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASS,
      database: DB_BASE
    },
    console.log(`Connected to the ${DB_BASE} database.`)
  );

module.exports = db;