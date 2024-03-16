
const {createNewTask ,getTask}  = require("../../controller/tasks/taskController")
const express = require("express")

const router = express.Router()

router.post("/task",createNewTask)
router.get("/task",getTask)
module.exports = router