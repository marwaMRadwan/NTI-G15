const userModel = require("../models/user.model")
const sum = (arr,n)=>{
    let s=0
    arr.forEach(a=> s+=a[n])
    return s
}
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
    res.render('addpost', {pageTitle:"add user"})
}
const addPostLogic= async(req,res) => {
    try{
        msg=false
        const data = new userModel({...req.body, userType:"user"})
        await data.save()
        res.redirect('/')
    }
    catch(e){
        const msg = e.message
        res.render('addpost', {pageTitle:"add user(post method)", msg, user:req.body})
    }
}
const showSingle = async(req,res)=>{            
    try{
        const result= await userModel.findOne({_id:req.params.id})
        res.render("single",{
            pageTitle:"all players", 
            user:result, 
            hasGrades: result.grades.length==0?false:true,
            total : sum(result.grades, 'degree')
        })
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
     await userModel.findByIdAndUpdate(req.params.id, req.body, {
        runValidators:true
    })
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
   const addgrade = async(req,res) => {
    res.render("addGrade", {pageTitle:"add Grade"})
   }
const addgradeLogic = async(req,res)=>{
    try{
        const result= await userModel.findById(req.params.id)
        result.grades.push(req.body)
        result.save()
        res.redirect(`/single/${result._id}`)
    }
    catch(e){
        res.send(e.message)
    }
}
const delGrade = async(req,res)=>{
    const gId = req.params.gId
    let x = await userModel.findOne({"grades._id":gId})
    x.grades = x.grades.filter(g=> g._id != gId)
    await x.save()
    res.redirect(`/single/${x._id}`)
}
module.exports = {
    allPlayers, 
    addPost, 
    addPostLogic, 
    showSingle, 
    editSingle, 
    editSingleLogic, 
    delAll, 
    delUser,
    addgrade,
    addgradeLogic, delGrade
}