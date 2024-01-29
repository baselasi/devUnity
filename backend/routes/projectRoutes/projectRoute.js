
const {createProject,getProjectsasync} = require("../../controller/projects/projectController")
const express = require("express")



const router = express.Router()

router.post("/project",createProject)
router.get("/project",getProjectsasync)
module.exports = router
