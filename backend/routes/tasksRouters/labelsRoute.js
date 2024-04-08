const {postLabel,getLabels} = require("../../controller/tasks/labelsController")
const express = require("express")
const { route } = require("../user")

const router = express.Router()

router.post("/labels",postLabel)
router.get("/labels",getLabels)
module.exports = router