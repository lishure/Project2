var express = require('express')
var router = express.Router()
var User = require('../Userdb/User')

/* GET home page. */

module.exports = function (passport) {
  router.post('/signup', function (req, res) {
    var body = req.body
    var username = body.username
    var password = body.password
    User.findOne({
      username: username
    }, function (err, doc) {
      if (err) {
        res.status(500).send('error occured')
      } else {
        if (doc) {
          res.status(500).send('Username already exists')
        } else {
          var record = new User()
          record.username = username
          record.password = record.hashPassword(password)
          record.save(function (err, user) {
            if (err) {
              res.status(500).send('db error')
            } else {
              res.redirect('/login')
            }
          })
        }
      }
    })
  })

  router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/all-entries.html'
  }), function (req, res) {
    res.send('hey')
  })
  return router
}
