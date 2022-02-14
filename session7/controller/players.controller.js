const dealWithData = require("./helpers/dealWithData")
const uniqid = require("uniqid")
const allPlayers = (req,res)=>{
    const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
    res.render("all",
    {
        pageTitle:"all players",
        allPlayers,
        isEmpty: allPlayers.length==0? true: false
    })
}
const addPlayers = (req,res)=>{
    if(req.query.name&&req.query.age){
        const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
        // console.log(req.query)
        allPlayers.push({
            id:uniqid(),
            name: req.query.name,
            age:req.query.age
        })
        dealWithData.writeDataToFile('./models/data.json', allPlayers)
        return res.redirect('/')
    }
    res.render('add', {
        pageTitle:"add new player",
        // ...req.query,
        // x:{name:"a", age:"30"}
    })
}

const addPost = (req, res)=>{
    res.render('addpost', {pageTitle:"add user(post method)"})
}

const addPostLogic=(req,res)=>{
    const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
    allPlayers.push({
        id:uniqid(),
        name: req.body.name,
        age:req.body.age
    })
    dealWithData.writeDataToFile('./models/data.json', allPlayers)
    res.redirect('/')
}
const showSingle = (req,res)=>{
    const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
    const user = allPlayers.find(player=> player.id == req.params.id )
    res.render('single', {
        pageTitle:"single data",
        user
    })
}
const editSingle = (req,res)=>{
    const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
    const user = allPlayers.find(player=> player.id == req.params.id )
    res.render('edit', {
        pageTitle:"Edit data",
        user
    })
}
const editSingleLogic = (req,res)=>{
    const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
    const userId = allPlayers.findIndex(player=> player.id == req.params.id )
    allPlayers[userId].name=req.body.name
    allPlayers[userId].age=req.body.age
    dealWithData.writeDataToFile('./models/data.json', allPlayers)
    res.redirect("/")    
}

const delAll = (req,res)=>{
    dealWithData.writeDataToFile('./models/data.json', [])
    res.redirect("/")
}
module.exports = {
    allPlayers, 
    addPlayers, 
    addPost, 
    addPostLogic, 
    showSingle, 
    editSingle, 
    editSingleLogic, 
    delAll
}