import passport from 'passport';
import passportLocal from 'passport-local'
import mongoose from 'mongoose';

var User = mongoose.model('User');
var LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      if (!user.validatePassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      return done(null, user);
    });
  }
));