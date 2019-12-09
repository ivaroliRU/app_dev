const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const { createUser } = require('./services/userService');

const initializePassport = require('./passport-config')

initializePassport(passport)

app.use(express.json())
app.use(session({
  secret: (process.env.SESSION_SECRET)?process.env.SESSION_SECRET:'asdfasdfasdf',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.post('/login', checkNotAuthenticated, passport.authenticate('local'), function(req, res) {
  res.status(200).end();
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const {user} = req.body;
    
    createUser(user.email, user.password)
    return res.status(200).end();
  } catch (e) {
    console.log(e);
    
    return res.status(400).end();
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  return res.status(200).end();
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  return res.status(401).end();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.status(200).end;
  }

  next()
}

module.exports = app;