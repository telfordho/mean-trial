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

  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function () {
    var token;
    token = user.generateJWT();
    res.status(200);
    res.json({ token: token });
  });
};

var getProfile = exports.getProfile = function getProfile(req, res) {

  User.findById("5c7a5270df747a067214fee6").then(function (profile) {
    res.status(200).json(profile);
  }).catch(function () {
    res.status(401).json({
      "message": "Unauthorized"
    });
  });
};

var updateProfile = exports.updateProfile = function updateProfile(req, res) {

  User.findOneAndUpdate({ _id: "5c7a5270df747a067214fee6" }, { notes: [{ _id: '5c7a5270df747a067214fee8',
      title: '123',
      description: '123',
      status: 'completed' }, { _id: '5c7a5270df747a067214fee7',
      title: '234',
      description: '234',
      status: 'completed' }, {
      title: '444',
      description: '555',
      status: 'completed' }] }).then(function (profile) {
    res.status(200).json(profile);
  }).catch(function () {
    res.status(401).json({
      "message": "Unauthorized"
    });
  });
};