const router = require('express').Router()
const playersController = require("../controller/players.controller")
router.get("", playersController.allPlayers )
router.get("/add", playersController.addPlayers)
router.get("/addPost", playersController.addPost)
router.post('/addPost', playersController.addPostLogic)
router.get('/single/:id', playersController.showSingle)
module.exports = router
