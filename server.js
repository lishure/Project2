// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************

require('dotenv').config()
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://heroku_v9p9l22r:u816mb3il2qevb060rm36u0v20@ds057934.mlab.com:57934/heroku_v9p9l22r')
// mongoose.connect('mongodb://localhost:27017/login')
var passport = require('passport')

const express = require('express')
const exphbs = require('express-handlebars')

// Add for Passport
var path = require('path')
// var logger = require('morgan')
// var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var session = require('express-session')

var index = require('./routes/index')
var users = require('./routes/users')
var auth = require('./public/auth')(passport)

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */

const app = express()
const PORT = process.env.PORT || 3000
// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
)
app.set('view engine', 'handlebars')

// Routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}))

app.use(passport.initialize())
app.use(passport.session())
require('./passport')(passport)

app.use('/', index)
app.use('/users', users)
app.use('/auth', auth)

module.exports = app
