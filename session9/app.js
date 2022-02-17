const express= require("express")
const app = express()
require('./models/dbCon/connection')
const user = require('./models/user.model')
//api
app.use(express.json())
app.post("/add", (req,res)=>{
    const newUser = new user({name:"mazen", age:"ggg", x:5})
    newUser.save() //insertOne
    .then(result=>res.send(result))
    .catch(e=> res.send(e))    
})
app.listen(3000)