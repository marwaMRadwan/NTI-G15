const userModel = require("../../database/models/user.model")

class User{
    static register= async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            res.send({
                apiStatus:true, data: user, message:"data added successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error adding user"})
        }
    }
}
module.exports = User