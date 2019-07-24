/* eslint-disable no-useless-catch */
// eslint-disable-next-line no-useless-catch
// Dependencies
const Buyers = require('../models/buyers')
const Chat = require('../models/chat')
/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 */

module.exports = function (app) {
  // Get all chat
  app.get('/api/chat', (req, res) => {
    Chat.findAll()
      .then(chat => {
        res.json(chat)
      })
  })

  // Get chat by id
  app.get('/api/chat/:id', (req, res) => {
    Chat.getID(req.params)
      .then(chat => {
        res.json(chat)
      })
  })

  // Create a new chat
  app.post('/api/chat', (req, res) => {
    Chat.create(req.body)
      .then(chat => {
        res.json(chat)
      })
  })

  // Delete an chat by id
  app.delete('/api/chat/:id', (req, res) => {
    Chat.destroy(req.params)
      .then(chat => {
        res.json(chat)
      })
  })

  // Update an chat by id
  app.put('/api/chat/:id', (req, res) => {
    Chat.update(req.params, req.body)
      .then(chat => {
        res.json(chat)
      })
  })

  // Get all buyers
  app.get('/api/buyers', (req, res) => {
    Buyers.findAll()
      .then(buyers => {
        res.json(buyers)
      })
  })

  // Get buyer by id
  app.get('/api/buyers/:id', (req, res) => {
    console.log('hello', req.body)
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

  // Get current interest rate
  app.get('/api/get-interest-rate', (req, res) => {
    Buyers.getInterestRate(req.body)
      .then(buyers => {
        res.json(buyers)
      })
  })
}
