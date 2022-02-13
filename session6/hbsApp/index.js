const express = require("express")
const hbs = require("hbs")
const path = require("path")
const PORT = 3000
const fs = require('fs')
const app = express()
app.set('view engine', 'hbs')
app.use( express.static(path.join(__dirname, "/frontend/public")))
app.set( 'views', path.join(__dirname, "/frontend/views"))
hbs.registerPartials( path.join(__dirname, "/frontend/layouts"))
app.get("", (req, res)=>{
    // const data = ['a','b','c','d','e']
    const data = JSON.parse(fs.readFileSync('./users.json'))
    res.render("home", {pageTitle:"Home Page", data})
})
app.get("/contact", (req,res)=>{
    const images = [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          "url": "https://via.placeholder.com/600/d32776",
          "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
          "albumId": 1,
          "id": 5,
          "title": "natus nisi omnis corporis facere molestiae rerum in",
          "url": "https://via.placeholder.com/600/f66b97",
          "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
          "albumId": 1,
          "id": 6,
          "title": "accusamus ea aliquid et amet sequi nemo",
          "url": "https://via.placeholder.com/600/56a8c2",
          "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
          "albumId": 1,
          "id": 7,
          "title": "officia delectus consequatur vero aut veniam explicabo molestias",
          "url": "https://via.placeholder.com/600/b0f7cc",
          "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
          "albumId": 1,
          "id": 8,
          "title": "aut porro officiis laborum odit ea laudantium corporis",
          "url": "https://via.placeholder.com/600/54176f",
          "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
          "albumId": 1,
          "id": 9,
          "title": "qui eius qui autem sed",
          "url": "https://via.placeholder.com/600/51aa97",
          "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        },
        {
          "albumId": 1,
          "id": 10,
          "title": "beatae et provident et ut vel",
          "url": "https://via.placeholder.com/600/810b14",
          "thumbnailUrl": "https://via.placeholder.com/150/810b14"
        }
      ]
    res.render("contactus", {pageTitle:"Contact Us", images})
})

const apiRequest = require("./play")
app.get("/api", (req,res)=>{
    apiRequest((data, err)=>{
        if(data) return res.send(data)
        res.send(err)
    })
})

app.get("*", (req,res)=> res.render('err404', {pageTitle:"Error Found"}))
app.listen(PORT, ()=> console.log("app on 3000"))