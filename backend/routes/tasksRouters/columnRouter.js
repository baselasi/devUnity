

const {createNewColumn} = require("../../controller/tasks/columnController")
const express = require("express")

const router = express.Router()

router.post("/column",createNewColumn)

module.exports = router