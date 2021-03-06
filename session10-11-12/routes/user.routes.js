const router = require('express').Router()
const userController = require("../app/controller/user.controller")
const upload = require("../middleware/fileUpload")
const auth = require('../middleware/auth')
router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/all", auth , userController.getAll)
router.get("/all/:id",auth, userController.getSingle)
router.delete("/all",auth, userController.delAll)
router.delete("/all/:id",auth, userController.delSingle)
router.get("/me", auth , userController.me)
router.post("/logout", auth,userController.logout)
router.post("/logoutAll", auth,userController.logoutAll)
// router.post('/profile',auth, upload.single('img'), userController.profileImg)
router.post('/profile1',upload.single('profile'), (req,res)=> {
    res.status(200).send(req.file)
})

module.exports= router