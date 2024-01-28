

const {createNewColumn, getColumn} = require("../../controller/tasks/columnController")
const express = require("express")

const router = express.Router()

router.post("/column",createNewColumn)
router.get("/column",getColumn)

module.exports = router