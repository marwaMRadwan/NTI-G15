const router = require('express').Router()
const userController = require("../app/controller/user.controller")
const auth = require('../middleware/auth')
router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/all", auth , userController.getAll)
router.get("/all/:id", userController.getSingle)
router.delete("/all", userController.delAll)
router.delete("/all/:id", userController.delSingle)
router.get("/me", auth , userController.me)

module.exports= router