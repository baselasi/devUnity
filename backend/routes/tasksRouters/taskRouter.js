
const {createNewTask}  = require("../../controller/tasks/taskController")
const express = require("express")

const router = express.Router()

router.post("/task",createNewTask)

module.exports = router