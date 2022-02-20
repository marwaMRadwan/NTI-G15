const router = require('express').Router()
const userController = require("../app/controller/user.controller")

router.post("/register", userController.register)
router.get("/all", userController.getAll)
router.get("/all/:id", userController.getSingle)
router.delete("/all", userController.delAll)
router.delete("/all/:id", userController.delSingle)

module.exports= router