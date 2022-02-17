const router = require('express').Router()
const playersController = require("../controller/players.controller")
router.get("", playersController.allPlayers )

router.get("/addPost", playersController.addPost)
router.post('/addPost', playersController.addPostLogic)

router.get('/single/:id', playersController.showSingle)

router.get('/edit/:id', playersController.editSingle)
router.post('/edit/:id', playersController.editSingleLogic)

router.post('/delAll', playersController.delAll)

router.get('/del/:id', playersController.delUser)

router.get('/addgrade/:id', playersController.addgrade)
router.post('/addgrade/:id', playersController.addgradeLogic)

router.get('/delGrade/:gId', playersController.delGrade)
module.exports = router
