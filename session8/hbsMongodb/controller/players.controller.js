const ObjectId = require("mongodb").ObjectId
const dealWithData = require("./helpers/dealWithData")
const uniqid = require("uniqid")
const dbcon = require('../models/dbCon')
const allPlayers = (req,res)=>{
    dbcon((e, client, db)=>{
        if(e) return res.send(e.message)
        db.collection('data').find().toArray((error, result)=>{
            res.render("all",
            {
                pageTitle:"all players",
                allPlayers:result,
                isEmpty: result.length==0? true: false
            })
        
        })
    })
}
const addPost = (req, res)=>{
    res.render('addpost', {pageTitle:"add user(post method)"})
}
const addPostLogic=(req,res)=>{
    dbcon((e, client, db)=>{
     if(e) return res.send(e.message)
     db.collection('data')
     .insertOne(req.body, 
       (error, result)=>{
        if(error) return res.send(error)
        client.close()
        res.redirect("/")
       })
    })
}
const showSingle = (req,res)=>{
    dbcon((e, client, db)=>{
        if(e) return res.send(e.message)
        db.collection('data')
        .findOne(
            {_id: new ObjectId(req.params.id)},
            (error, result)=>{
                client.close()
                res.render("single",
                    {pageTitle:"all players", user:result}
                )
            })
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
    dbcon((e, client, db)=>{
        if(e) return res.send(e.message)
        db.collection('data').deleteMany().then(()=>{
            client.close()    
            res.redirect("/")}
            )
        })

}
const delUser = (req,res)=>{
    const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
    const users = allPlayers.filter(player=> player.id != req.params.id )
    dealWithData.writeDataToFile('./models/data.json', users)
    res.redirect("/")    

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