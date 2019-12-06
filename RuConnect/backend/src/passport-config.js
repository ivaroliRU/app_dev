const LocalStrategy = require('passport-local').Strategy
const { findUser } = require('./services/userService');

function initialize(passport) {
    passport.serializeUser(function(user, done) {
      done(null, user);
    });
    
    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

    passport.use(new LocalStrategy(
      {
        usernameField: 'user[email]',
        passwordField: 'user[password]',
      }, 
      function (email, password, done){
          findUser(email, password, function(result){
            if(result){
              return done(null, true);
            }
            return done(null, false, { errors: { 'email or password': 'is invalid' } });
        });
    }));
}

module.exports = initialize