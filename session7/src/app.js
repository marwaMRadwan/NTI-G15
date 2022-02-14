const express = require("express")
const app = express()

const hbs = require("hbs")
const path = require("path")

app.use( express.static(path.join( __dirname, "../frontend/static")) )
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../frontend/views"))
hbs.registerPartials(path.join(__dirname, "../frontend/layouts"))

const playerRoutes = require("../routes/players.routes")
app.use(playerRoutes)

module.exports = app