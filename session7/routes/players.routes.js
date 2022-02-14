const router = require('express').Router()
const playersController = require("../controller/players.controller")
router.get("", playersController.allPlayers )
router.get("/add", playersController.addPlayers)
router.get("/addPost", playersController.addPost)
router.post('/addPost', playersController.addPostLogic)
module.exports = router
