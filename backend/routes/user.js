
const {signUp,singIn} = require("../controller/user")
const express = require("express")

const router = express.Router()

router.post("/singUp",signUp)
router.post("/login",singIn)

module.exports = router