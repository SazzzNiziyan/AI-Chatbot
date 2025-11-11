const mongoose = require('mongoose');
import { Schema } from './../../node_modules/mongoose/types/index.d';
import { First } from './../../node_modules/mongoose/types/expressions.d';

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        requires: true,
        unique: true,
    },
    
    fullname: {
        firstName:{
        type: String,
        required : true
        },
        lastName:{
        type: String,
        required : true
        }
    },
    password: {
        type: String,
    }

})

const userModel = mongoose.model("user", userSchema)