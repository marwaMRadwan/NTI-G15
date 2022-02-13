const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()
const staticFile = path.join( __dirname, "/public")
const viewsDir = path.join(__dirname, "/frontend/myViews")
const layoutsDir = path.join(__dirname, "/frontend/layouts")
app.use( express.static(staticFile) )
app.set("view engine", "hbs")
app.set("views", viewsDir)
hbs.registerPartials(layoutsDir)
//routes
// app.get("", (req, res)=>{ 
//     res.send("hello marwa radwan")
// })

// app.get("/marwaRadwan", (req,res)=>{
//     res.send({name:"marwa", age:37})
// })
// app.get('/html', (req,res)=>{
//     res.send("<h1>hello</h1>")
// })
app.get("", (req,res)=>{
    res.render('home', {name:"marwa"})
})
app.get("/about", (req,res)=> res.render('about'))
app.listen(3000, ()=>console.log("server on http://localhost:3000"))