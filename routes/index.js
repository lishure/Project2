var express = require('express')
var router = express.Router()

// var loggedin = function (req, res, next) {
//   if (req.isAuthenticated()) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// }

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  })
})

router.get('/login', function (req, res, next) {
  res.render('./../public/login')
})

router.get('/signup', function (req, res, next) {
  res.render('./../public/signup')
})

// router.get('/profile', loggedin, function (req, res, next) {
//   res.render('profile', {
//     user: req.user
//   })
// })

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/login')
})
module.exports = router
