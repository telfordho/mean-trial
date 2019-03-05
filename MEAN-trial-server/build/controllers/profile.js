'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.getProfile = exports.register = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');

var register = exports.register = function register(req, res) {
  var user = new User();

  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function () {
    var token;
    token = user.generateJWT();
    res.status(200);
    res.json({
      token: token,
      id: user._id });
  });
};

var getProfile = exports.getProfile = function getProfile(req, res) {
  var id = req.query.searchId;
  User.findById(id).then(function (profile) {
    res.status(200).json(profile);
  }).catch(function () {
    res.status(401).json({
      "message": "Unauthorized"
    });
  });
};

var updateProfile = exports.updateProfile = function updateProfile(req, res) {
  console.log(req.body);
  User.findOneAndUpdate({
    _id: req.body.id
  }, {
    notes: req.body.notes
  }).then(function (profile) {
    res.status(200).json(profile);
  }).catch(function () {
    res.status(401).json({
      "message": "Unauthorized"
    });
  });
};