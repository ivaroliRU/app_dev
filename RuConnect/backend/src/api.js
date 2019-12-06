// express for handling http requests
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//generate a unique id for each user session
const { uuid } = require('uuidv4');

const app = express();

const HOUR = 1000*60*60;

//use sessions for keeping track of authenticated users
var session = require('express-session');

//configuring the app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    genid: function(req) {
      return uuid() // generate unique id
    },
    secret: 'aNvækjAfnSoet53qpm3553n',
    cookie: { maxAge: HOUR * 48, auth: false },
    resave: false,
    saveUninitialized: false
}));

//avary request goes the routes
app.use(require('./routes'));

module.exports = app;