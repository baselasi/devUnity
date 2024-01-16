
const {signUp,singIn,checkUser} = require("../controller/user")
const express = require("express")

const router = express.Router()

router.post("/singUp",checkUser,signUp)
router.post("/login",singIn)

module.exports = router