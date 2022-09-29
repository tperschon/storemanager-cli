// import mysql2
const mysql = require('mysql2');
require('dotenv').config();

// create a db connection we can export
const db = mysql.createConnection(
    {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

module.exports = db;