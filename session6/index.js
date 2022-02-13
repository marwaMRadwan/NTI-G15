const path = require("path")
const express = require("express")
const app = express()

const staticFile = path.join(__dirname, "/public")
app.use( express.static(staticFile) )
//routes
app.get("", (req, res)=>{ 
    res.send("hello marwa radwan")
})

app.get("/marwaRadwan", (req,res)=>{
    res.send({name:"marwa", age:37})
})
app.get('/html', (req,res)=>{
    res.send("<h1>hello</h1>")
})
app.listen(3000, ()=>console.log("server on http://localhost:3000"))