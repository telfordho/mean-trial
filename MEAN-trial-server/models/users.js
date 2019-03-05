import mongoose from 'mongoose'
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

var userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    notes: [{
      title: String,
      description: String,
      status: String
    }],
    salt: String,
    hash: String,
  });

  userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };
  
  userSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  };

  userSchema.methods.generateJWT = function() {
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, 'secret');
  }

  
  mongoose.model('User', userSchema);