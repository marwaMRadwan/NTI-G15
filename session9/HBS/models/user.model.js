const mongoose = require("mongoose")
const user = mongoose.model("User", {
    name:{
        type:String,
        lowerCase: true,
        minLength:3,
        maxLength:20
    },
    age:{
        type:Number,
        min:21,
        max:60
    }
})
module.exports = user