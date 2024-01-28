
const {createProject} = require("../../controller/projects/projectController")
const express = require("express")



const route = express.Router()

route.post=("/project",createProject)

module.exports = route
