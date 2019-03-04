'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../controllers/auth');

var _profile = require('../controllers/profile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get('/profile', _profile.getProfile);
router.put('/update', _profile.updateProfile);
router.post('/login', _auth.login);
router.post('/register', _profile.register);

exports.default = router;