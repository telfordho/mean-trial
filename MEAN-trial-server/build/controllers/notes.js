'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateNotes = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');

var updateNotes = exports.updateNotes = function updateNotes(req, res) {
    console.log(req);
    User.findByIdAndUpdate("5c7a5270df747a067214fee6").exec().then(function (profile) {
        console.log(profile);
        res.status(200).json(profile);
    }).catch(function (err) {
        console.log(err);
        res.status(401).json({
            "message": "Unauthorized"
        });
    });
};