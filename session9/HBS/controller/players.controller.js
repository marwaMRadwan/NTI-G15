const userModel = require("../models/user.model")
const allPlayers = async(req,res)=>{
    try{
        const result = await userModel.find()
            res.render("all",
            {
                pageTitle:"all players",
                allPlayers:result,
                isEmpty: result.length==0? true: false
            })
    }
    catch(e){
        res.send(e.message)
    }
}
const addPost = (req, res)=>{
    res.render('addpost', {pageTitle:"add user(post method)"})
}
const addPostLogic= async(req,res) => {
    /*
        const data = new userModel(req.body)
        data.save()
        .then(res=>{})
        .catch(e=>)
    */
    try{
        const data = new userModel(req.body)
        await data.save()
        res.redirect('/')
    }
    catch(e){
        res.send(e.message)
    }
}
const showSingle = async(req,res)=>{            
    try{
        // const result= await userModel.findById(req.params.id)
        const result= await userModel.findOne({_id:req.params.id})
        res.render("single",{pageTitle:"all players", user:result})
    }
    catch(e){
        res.send(e.message)
    }
}
const editSingle = async(req,res)=>{
    try{
     const result= await userModel.findOne({_id:req.params.id})
     res.render('edit', {pageTitle:"Edit data",user:result}) 
    }
    catch(e){
        res.send(e.message)
    }    
}
const editSingleLogic = async(req,res)=>{
    try{
     await userModel.findByIdAndUpdate(req.params.id, req.body)
     res.redirect('/') 
    }
    catch(e){
     res.send(e.message)
    }    
}
const delAll = async(req,res)=>{
    try{
        await userModel.deleteMany()
        res.redirect('/') 
       }
       catch(e){
        res.send(e.message)
       }    

}
const delUser = async(req,res)=>{
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.redirect('/') 
       }
       catch(e){
        res.send(e.message)
       }    
   }
module.exports = {
    allPlayers, 
    addPost, 
    addPostLogic, 
    showSingle, 
    editSingle, 
    editSingleLogic, 
    delAll, 
    delUser
}