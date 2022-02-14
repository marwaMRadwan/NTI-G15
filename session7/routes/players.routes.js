const router = require('express').Router()
const playersController = require("../controller/players.controller")
router.get("", playersController.allPlayers )
router.get("/add", playersController.addPlayers)
module.exports = router
