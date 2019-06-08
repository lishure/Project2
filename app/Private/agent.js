// add the mysql dependency
var mysql = require('mysql')
// add inquirer
var inquirer = require('inquirer')
// create the mysql connection configuration
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
      choices: ['Show All Clients', 'Show Clients By Credit Score Range', 'Show Clients By Purchase Price']
    })
    .then(function (answer) {
      // based on their answer, run respective functions
      if (answer.options === 'Show All Clients') {
        showClients()
      } else if (answer.options === 'Show Clients By Credit Score Range') {
        selectCredit()
      } else if (answer.options === 'Show Clients By Purchase Price') {
        selectPrice()
      }
    })
}
// function to view all clients in database
function showClients () {
  connection.query('SELECT * FROM clients', function (err, res) {
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
      choices: ['0-579', '580-619', '620-679', '680-739', '740-850']
    })
    .then(function (answer) {
      // based on their answer, run respective functions
      if (answer.options === '0-579') {
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
  // function to display ckients with F credit
  function fCredit () {
    connection.query('SELECT * FROM clients WHERE creditgrade = "F"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }
  // function to display ckients with d credit
  function dCredit () {
    connection.query('SELECT * FROM clients WHERE creditgrade = "D"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }
  // function to display ckients with c credit
  function cCredit () {
    connection.query('SELECT * FROM clients WHERE creditgrade = "C"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }
  // function to display ckients with b credit
  function bCredit () {
    connection.query('SELECT * FROM clients WHERE creditgrade = "B"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }
  // function to display clients with a credit
  function aCredit () {
    connection.query('SELECT * FROM clients WHERE creditgrade = "A"', function (err, res) {
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
    connection.query('SELECT * FROM clients WHERE budget <=?', answers.maxbudget, function (err, results) {
      if (err) throw err
      console.table(results)
      /// Code is not finished yet
      connection.end()
    })
  })
}
