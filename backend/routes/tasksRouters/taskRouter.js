
const { createNewTask, getTask, patchTask } = require("../../controller/tasks/taskController")
const express = require("express")

const router = express.Router()

router.post("/task", createNewTask)
router.get("/task", getTask)
router.patch("/task", async (req, res) => {
    try {
        const taskId = req.query.taskId
        const update = req.body
        const data = await patchTask(taskId, update)
        return res.status(200).json({
            sucess: true,
            data
        })
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            message: error.message
        })
    }

})
module.exports = router