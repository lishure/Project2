// require('dotenv').config({ path: '../../.env' })
// add the mysql dependency
var mysql = require('mysql')
// add inquirer
var inquirer = require('inquirer')
// // create the mysql connection configuration
// var connection = mysql.createConnection({
//   host: process.env.HOST,
//   // Your port; if not 3306
//   port: 3306,
//   // Your sql username
//   user: process.env.USER,
//   // Your password
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE
// })
/// /////////////////code below connects to local database///////////////////////
var connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your sql username
  user: 'lishure',
  // Your password
  password: '',
  database: 'buyersdb'
})
/// //////////////////End of code that connects to local database//////////////////
// connect to buyersdb database
connection.connect(function (err) {
  if (err) throw err
  start()
})
// function that asks the agent what to do
function start () {
  inquirer
    .prompt({
      name: 'options',
      type: 'list',
      message: 'Would would you like to do?',
      choices: ['Show All Clients', 'Show Clients By Credit Score Range', 'Show Clients By Purchase Price', 'Show Clients By Timeline']
    })
    .then(function (answer) {
      // based on their answer, run respective functions
      if (answer.options === 'Show All Clients') {
        showClients()
      } else if (answer.options === 'Show Clients By Credit Score Range') {
        selectCredit()
      } else if (answer.options === 'Show Clients By Purchase Price') {
        selectPrice()
      } else if (answer.options === 'Show Clients By Timeline') {
        selectTimeline()
      }
    })
  // function to view all clients in database
  function showClients () {
    connection.query('SELECT * FROM buyers', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }
  // function for prompt to select credit range
  function selectCredit () {
    inquirer
      .prompt({
        name: 'options',
        type: 'list',
        message: 'Select Credit Score Range',
        choices: ['300-579', '580-619', '620-679', '680-739', '740-850']
      })
      .then(function (answer) {
      // based on their answer, run respective functions
        if (answer.options === '300-579') {
          fCredit()
        } else if (answer.options === '580-619') {
          dCredit()
        } else if (answer.options === '620-679') {
          cCredit()
        } else if (answer.options === '680-739') {
          bCredit()
        } else if (answer.options === '740-850') {
          aCredit()
        }
      })
    // function to display clients with F credit
    function fCredit () {
      connection.query('SELECT * FROM buyers WHERE creditgrade = "Very Poor"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display ckients with d credit
    function dCredit () {
      connection.query('SELECT * FROM buyers WHERE creditgrade = "Fair"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display ckients with c credit
    function cCredit () {
      connection.query('SELECT * FROM buyers WHERE creditgrade = "Good"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display ckients with b credit
    function bCredit () {
      connection.query('SELECT * FROM buyers WHERE creditgrade = "Very Good"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display clients with a credit
    function aCredit () {
      connection.query('SELECT * FROM buyers WHERE creditgrade = "Exceptional"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
  }
  // function to display clients by budget
  function selectPrice () {
    inquirer.prompt([
      {
        name: 'maxbudget',
        message: 'What is the max budget?'
      }
    ]).then(function (answers) {
      connection.query('SELECT * FROM buyers WHERE budget >=?', answers.maxbudget, function (err, results) {
        if (err) throw err
        console.table(results)
        connection.end()
      })
    })
  }

  /// /////////// Adding in Search by Timeline Function//////////////////////
  // function for prompt to select credit range
  function selectTimeline () {
    inquirer
      .prompt({
        name: 'options',
        type: 'list',
        message: 'Select Timeline',
        choices: ['Priority 1: 1-3 Months', 'Priority 2: 3-6 Months', 'Priority 3: 6-12 Months', 'Priority 4: 12+ Months', 'Priority 5: Never']
      })
      .then(function (answer) {
      // based on their answer, run respective functions
        if (answer.options === 'Priority 1: 1-3 Months') {
          priorityOne()
        } else if (answer.options === 'Priority 2: 3-6 Months') {
          priorityTwo()
        } else if (answer.options === 'Priority 3: 6-12 Months') {
          priorityThree()
        } else if (answer.options === 'Priority 4: 12+ Months') {
          priorityFour()
        } else if (answer.options === 'Priority 5: Never') {
          priorityFive()
        }
      })
    // function to display clients with F credit
    function priorityOne () {
      connection.query('SELECT * FROM buyers WHERE timeline = "1-3 Months"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display ckients with d credit
    function priorityTwo () {
      connection.query('SELECT * FROM buyers WHERE timeline = "3-6 Months"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display ckients with c credit
    function priorityThree () {
      connection.query('SELECT * FROM buyers WHERE timeline = "6-12 Months"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display ckients with b credit
    function priorityFour () {
      connection.query('SELECT * FROM buyers WHERE timeline = "12+ Months"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
    // function to display clients with a credit
    function priorityFive () {
      connection.query('SELECT * FROM buyers WHERE timeline = "Never"', function (err, res) {
        if (err) throw err
        console.table(res)
        connection.end()
      })
    }
  }
}
/// ////////////////////////End Timeline Function//////////////////////////////////////
