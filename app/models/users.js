const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    first_name: {
        type: String, 
        trim: true,
        required: true
    },
    last_name:{
        type: String, 
        trim: true,
        required: true
    },
    address: {
        type: String, 
        trim: true,
        required: true
    },
    address2: {
        type: String, 
        trim: true,
    },
    city: {
        type: String, 
        trim: true,
        required: true
    },
    zip: {
        type: Number, 
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      },
      email: {
          type: String,
          trim: true,
          required: true
      },
      password: {
        type: String,
        required: true,
      },
    });
    
    UserSchema.pre("save", function (next) {
      const user = this;
      if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
          if (err) {
            return next(err);
          }
          bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
              return next(err);
            }
            user.password = hash;
            return next();
          });
        });
      } else {
        return next();
      }
    });
    
    UserSchema.methods.comparePassword = function (passw, cb) {
      bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
          return cb(err);
        }
        cb(null, isMatch);
      });
    };
    
    const User = mongoose.model("User", UserSchema);
    
    module.exports = User;