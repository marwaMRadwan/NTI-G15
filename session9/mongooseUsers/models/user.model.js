// grades [],  phone number, type
const mongoose = require("mongoose")
const validator = require("validator")
const user = mongoose.model("User", {
    name:{
        type:String,
        trim:true,
        minLength:3,
        maxLength:20,
        required:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        unique:true,
        //match:
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    },
    password:{
        type:String,
        trim:true,
        minLength:6,
        // match:
        validate(value){
            if(value.includes(this.name)) 
                throw new Error('your name cann\'t bs part of pass')
        }
    },
    status:{
        type:Boolean,
        default:false
    },
    phone:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG']))
                throw new Error("invalid phone number")
        }
    },
    grades : [
        {
            subject:{
                type:String,
                required:true,
                minLength:4,
                maxLength:20
            },
            degree:{
                type:Number,
                min:0,
                max:100
            }
        }
    ],
    userType:{
        type:String,
        enum:["admin", "user"],
        required:true
    }
})
module.exports = user
