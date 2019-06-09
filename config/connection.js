// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies

/* eslint-disable  no-unused-vars */
const mysql = require('mysql')
/* eslint-enable  no-unused-vars */

const ENV = process.env.NODE_ENV || 'development'

// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile')[ENV])

// Exports the connection for other files to use
module.exports = Knex

// Set up our connection information
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'nodeuser',
    password: '',
    database: 'buyersdb'
  })
  
  // Connect to the database
  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return;
    }
    console.log('connected as id ' + connection.threadId)
  })
  
  // Export connection
  module.exports = connection