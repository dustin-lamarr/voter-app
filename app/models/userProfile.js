const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({

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
    estado: {
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
    
    });

    const Profile = mongoose.model("Profile", ProfileSchema);

    module.exports = Profile;