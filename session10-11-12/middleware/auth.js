const jwt = require("jsonwebtoken")
const userModel = require("../database/models/user.model")
const auth = async(req,res, next)=>{
    try{
    //get authorization from header bearer
    const token = req.header("Authorization").replace('bearer ', "")
    //verify token to _id
    const d_token = jwt.verify(token, process.env.JWTKEY)
    //check _id, token in db
    const user = await userModel.findOne({_id:d_token._id, 'tokens.token':token})
    if(!user) throw new Error("invalid user")
    // if(user.role!="admin") throw new Error()
    req.user = user
    req.token = token
    //next
    next()
    }
    catch(e){
    //if !user not auth
    res.status(500).send({apiStatus:false, date:e.message, message:"not authorized"})
    }
}
module.exports = auth

//passport