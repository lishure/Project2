// add the mysql dependency
var mysql = require('mysql')
// add inquirer
var inquirer = require('inquirer')
// create the mysql connection configuration for the bamazon database
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
// connect to the bamazon database
connection.connect(function (err) {
  if (err) throw err
  start()
})
// function which prompts the user for what action they should take
function start () {
  inquirer
    .prompt({
      name: 'options',
      type: 'list',
      message: 'Would would you like to do?',
      choices: ['Show All Clients', 'Show Clients By Purchase Price', 'Show Clients By Credit Score Range']
    })
    .then(function (answer) {
      // based on their answer, run respective functions
      if (answer.options === 'Show All Clients') {
        showClients()
      } else if (answer.options === 'Show Clients By Purchase Price') {
        selectPrice()
      } else if (answer.options === 'Show Clients By Credit Score Range') {
        selectCredit()
      }
    })
}
// function to view table of products
function showClients () {
  connection.query('SELECT id,clientname,income,cashdown,creditgrade FROM clients', function (err, res) {
    if (err) throw err
    console.table(res)
    connection.end()
  })
}
// function to view stock quantity under than 5 units
function selectCredit () {
/// ///////////////////////////////////////////////////
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

  function fCredit () {
    connection.query('SELECT id,clientname,income,cashdown FROM clients WHERE creditgrade = "F"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }

  function dCredit () {
    connection.query('SELECT id,clientname,income,cashdown FROM clients WHERE creditgrade = "D"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }

  function cCredit () {
    connection.query('SELECT id,clientname,income,cashdown FROM clients WHERE creditgrade = "C"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }

  function bCredit () {
    connection.query('SELECT id,clientname,income,cashdown FROM clients WHERE creditgrade = "B"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }

  function aCredit () {
    connection.query('SELECT id,clientname,income,cashdown FROM clients WHERE creditgrade = "A"', function (err, res) {
      if (err) throw err
      console.table(res)
      connection.end()
    })
  }
  /// /////////////////////////////////////////////////////////

//   var query = 'SELECT sku,product_name,stock_quantity FROM products WHERE stock_quantity < 5'
//   connection.query(query, function (err, res) {
//     if (err) throw err
//     console.table(res)
  // connection.end()
}

// function to replenish inventory
function selectPrice () {
  inquirer.prompt([
    {
      name: 'needSku',
      message: 'What is the SKU of the product you wish to replenish?'
    }, {
      name: 'quantity',
      message: 'How many units would you like to add?'
    }
  ]).then(function (answers) {
    connection.query('SELECT stock_quantity,product_name FROM products WHERE sku=?', answers.needSku, function (err, results) {
      if (err) { console.log(err) };
      // add user input units to current stock quantity
      var replenish = parseInt(results[0].stock_quantity) + parseInt(answers.quantity)
      var pName = results[0].product_name
      // updates stock quantity of product matching sku number
      connection.query('UPDATE products SET stock_quantity=? WHERE sku=?', [replenish, answers.needSku],
        function (err, results) {
          if (err) { console.log(err) };
          console.log(answers.quantity + ' items added to ' + pName)
          showClients()
        })
    })
  })
}
// function to add new product
function addNew () {
  // Prompt the user to enter information about the new product
  inquirer.prompt([
    {
      type: 'input',
      name: 'product_name',
      message: 'Please enter the name of the product you wish to add:'
    },
    {
      type: 'input',
      name: 'department_name',
      message: 'Which department does the new product belong to?'
    },
    {
      type: 'input',
      name: 'price',
      message: 'What is the price per item?'
    },
    {
      type: 'input',
      name: 'stock_quantity',
      message: 'How many items are being added?'
    }
  ]).then(function (input) {
    // Add new product to bamazon database
    connection.query('INSERT INTO products SET ?', input, function (error, results, fields) {
      if (error) throw error
      console.log('New product has been added under SKU # ' + results.insertId + '.')
      // shows updated current items available
      showClients()
    })
  })
}
