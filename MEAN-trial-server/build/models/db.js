'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbURI = 'mongodb://localhost/meanTrial';
_mongoose2.default.connect(dbURI, { useNewUrlParser: true });
_mongoose2.default.promise = global.Promise;

_mongoose2.default.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
_mongoose2.default.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
_mongoose2.default.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});