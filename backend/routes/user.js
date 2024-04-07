
const {signUp,singIn,checkUser,getUsers} = require("../controller/user")
const express = require("express")

const router = express.Router()

router.post("/singUp",checkUser,signUp)
router.post("/login",singIn)
router.get("/users",getUsers)
module.exports = router