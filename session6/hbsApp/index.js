const express = require("express")
const hbs = require("hbs")
const path = require("path")
const PORT = 3000

const app = express()

app.set('view engine', 'hbs')
app.use( express.static(path.join(__dirname, "/frontend/public")))
app.set( 'views', path.join(__dirname, "/frontend/views"))
hbs.registerPartials( path.join(__dirname, "/frontend/layouts"))

app.get("", (req, res)=>{
    res.render("home", {pageTitle:"Home Page"})
})
app.get("/contact", (req,res)=>{
    res.render("contactus", {pageTitle:"Contact Us"})
})
app.get("*", (req,res)=> res.render('err404', {pageTitle:"Error Found"}))
app.listen(PORT, ()=> console.log("app on 3000"))