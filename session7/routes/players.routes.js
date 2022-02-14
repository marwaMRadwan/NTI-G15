const router = require('express').Router()
const playersController = require("../controller/players.controller")
router.get("", playersController.allPlayers )
module.exports = router
