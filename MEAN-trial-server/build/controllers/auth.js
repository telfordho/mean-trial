'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(req, res) {
  _passport2.default.authenticate('local', function (err, user, info) {
    var token;

    if (err) {
      res.status(404).json(err);
      return;
    }

    if (user) {
      token = user.generateJWT();
      res.status(200);
      res.json({ token: token });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
}