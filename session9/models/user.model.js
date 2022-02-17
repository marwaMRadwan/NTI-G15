const mongoose = require("mongoose")
const user = new mongoose.model("User", { 
    name:{
        type:String
    }, 
    age:{
        type:Number
    } 
})

module.exports = user