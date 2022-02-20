const mongoose = require("mongoose")
const validator = require("validator")
const user = mongoose.model("user", {
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(val){
            if(!validator.isEmail(val)) throw new Error("invalid email format")
        }
    },
    password:{
        type:String,
        // match:'/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/'
    },
    birthDate:{
        type:Date,
        required:true
    },
    image:{
        type:String
    },
    otp:{
        type:String
    }
})
module.exports = user