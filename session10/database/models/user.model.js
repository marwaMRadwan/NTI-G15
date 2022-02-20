const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const userSchema = mongoose.Schema({
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
},
{timestamps:true}
)
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    // delete user.password
    const deletes = ['__v', 'password']
    deletes.forEach(d=> delete user[d])
    return user
}
userSchema.pre("save", async function(){
    if(this.isModified("password")) 
        this.password = await bcrypt.hash(this.password, 5)
})

const user = mongoose.model("user", userSchema)
module.exports = user