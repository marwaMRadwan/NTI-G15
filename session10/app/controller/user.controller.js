const userModel = require("../../database/models/user.model")

class User{
    static register= async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save() //methods
            res.send({
                apiStatus:true, data: user, message:"data added successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error adding user"})
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
    static login = async(req,res)=>{
        try{
            const user = await userModel.login(req.body.email, req.body.password)
            res.send(user)
        }
        catch(e){
            res.send(e.message)
        }
    }
}
module.exports = User