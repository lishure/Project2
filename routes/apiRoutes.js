// Dependencies
const Example = require('../models/example')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all examples
  app.get('/api/all-entries', function (req, res) {
    Example.findAll()
      .then(function (dbExamples) {
        res.json(dbExamples)
      })
  })

  // Create a new example
  app.post('/api/examples', function (req, res) {
    Example.create(req.body)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })

  // Delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    Example.destroy(req.params)
      .then(function (dbExample) {
        res.json(dbExample)
      })
  })
}

var connection = require('../config/connection.js')

// Routes
// =============================================================
module.exports = function (app) {
  // Get all chirps
  app.get('/all-entries', function (req, res) {
    var dbQuery = 'SELECT * FROM clients';

    connection.query(dbQuery, function (err, result) {
      if (err) throw err
      res.json(result)
    })
  })

  // // Add a chirp
  // app.post('/api/new', function (req, res) {
  //   console.log('Chirp Data:')
  //   console.log(req.body)

  //   var dbQuery = 'INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)';

  //   connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function (err, result) {
  //     if (err) throw err
  //     console.log('Chirp Successfully Saved!')
  //     res.end()
  //   })
  // })
};