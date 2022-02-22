const userModel = require("../../database/models/user.model")
const sendEmail = require("../helper/email.helper")
class User{
    static register= async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save() //methods
            sendEmail(user.email, "<h5>hello from app</h5>", "app s12", "register")
            res.send({
                apiStatus:true, data: user, message:"data added successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error adding user"})
        }
    }
    static login = async(req,res)=>{
        try{
            const user = await userModel.login(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.send({
                apiStatus:true,
                data:{ user, token }, 
                message:"logged in"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"invalid login"})
        }
    }
    static me = async(req,res)=>{
        res.send({apiStatus:true,data:req.user, message:'data featched'})
    }
    static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter( t => t.token != req.token )
            await req.user.save()
            res.send({apiStatus:true, data:{}, message:"logged out"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error in logout"})
        }
    }
    static logoutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            res.send({apiStatus:true, data:{}, message:"logged out"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error in logout"})
        }
    }
    static getAll = async(req,res)=>{
        try{
            const users = await userModel.find() //statics
            res.send({
                apiStatus:true, data: users, message:"data featched successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error fetching user"})
        }
    }
    static getSingle = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id) //statics
            res.send({
                apiStatus:true, data: user, message:"data featched successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error fetching user"})
        }
    }
    static delAll = async(req,res)=>{
        try{
            await userModel.deleteMany()
            res.send({
                apiStatus:true, data: [], message:"data deleted successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error deleting user"})
        }
    }
    static delSingle = async(req,res)=>{
        try{
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.send({
                apiStatus:true, data: user, message:"data deleted successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error deleting user"})
        }
    }
}
module.exports = User