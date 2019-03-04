'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  notes: [{
    title: String,
    description: String,
    status: String
  }],
  salt: String,
  hash: String
});

userSchema.methods.setPassword = function (password) {
  this.salt = _crypto2.default.randomBytes(16).toString('hex');
  this.hash = _crypto2.default.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password) {
  var hash = _crypto2.default.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = function () {

  return _jsonwebtoken2.default.sign({
    email: this.email,
    id: this._id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60
  }, 'secret');
};

_mongoose2.default.model('User', userSchema);