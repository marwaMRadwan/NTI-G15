const express = require("express")
const app = express()
require("../../database/connection")
app.use(express.json())
const userRoutes = require("../../routes/user.routes")
app.use("/api/user",userRoutes) 
const postRoutes = require("../../routes/post.routes")
app.use("/api/post",postRoutes) 
app.get("*", (req,res)=> res.send( {error:"invalid url"} ) )
module.exports=app

//  loca/api/post/xyz