'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');
var LocalStrategy = _passportLocal2.default.Strategy;

_passport2.default.use(new LocalStrategy({
  usernameField: 'email'
}, function (username, password, done) {
  User.findOne({ email: username }, function (err, user) {
    if (err) {
      return done(err);
    }
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
}));