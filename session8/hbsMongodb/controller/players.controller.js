const ObjectId = require("mongodb").ObjectId
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
     .insertOne({name:req.body.name, age:parseInt(req.body.age)}, 
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
        dbcon((e, client, db)=>{
        db.collection('data')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(data=>console.log(data))
        .catch(e=> console.log(e))
    })
    dbcon(async(e, client, db)=>{
        try{
            let x = await db.collection('data')
            .findOne({_id: new ObjectId(req.params.id)})
            console.log(x)    
        }
        catch(e){ console.log(e)}
    })

}
const editSingle = (req,res)=>{
    dbcon(async(e, client, db)=>{
        try{
            let user= await db.collection('data')
            .findOne({_id: new ObjectId(req.params.id)})
            res.render('edit', {
                pageTitle:"Edit data",
                user
            })
        
        }
        catch(e){ console.log(e)}
    })

}
const editSingleLogic = (req,res)=>{
    dbcon(async(e, client, db)=>{
        try{
            req.body.age = parseInt(req.body.age)
             await db.collection('data')
            .updateOne(
                {_id: new ObjectId(req.params.id)},
                {
                    $set:{...req.body}
            }
                )
            res.redirect("/")
        
        }
        catch(e){ console.log(e)}
    })
}
const addAge = (req,res)=>{
    dbcon(async(e, client, db)=>{
        try{
            await db.collection('data')
            .updateOne(
                {_id: new ObjectId(req.params.id)},
                {
                    $inc:{"age":1}
            }
                )
            res.redirect("/")
        
        }
        catch(e){ console.log(e)}
    })
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
    dbcon((e, client, db)=>{
        if(e) return res.send(e.message)
        db.collection('data').deleteOne({_id:new ObjectId(req.params.id)}).then(()=>{
            client.close()    
            res.redirect("/")}
            )
        })

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
    addAge
}