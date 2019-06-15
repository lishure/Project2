// Dependencies
const Buyers = require('../models/buyers')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 */

module.exports = function (app) {
  // Get all buyers
  app.get('/api/buyers', (req, res) => {
    Buyers.findAll()
      .then(buyers => {
        res.json(buyers)
      })
  })

  // Get buyer by id
  app.get('/api/buyers/:id', (req, res) => {
    Buyers.getID(req.params)
      .then(buyers => {
        res.json(buyers)
      })
  })

  // Create a new buyer
  app.post('/api/buyers', (req, res) => {
    Buyers.create(req.body)
      .then(buyers => {
        res.json(buyers)
      })
  })

  // Delete an buyer by id
  app.delete('/api/buyers/:id', (req, res) => {
    Buyers.destroy(req.params)
      .then(buyers => {
        res.json(buyers)
      })
  })

  // Update an buyer by id
  app.put('/api/buyers/:id', (req, res) => {
    Buyers.update(req.params, req.body)
      .then(buyers => {
        res.json(buyers)
      })
  })
}
