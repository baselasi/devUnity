

const { default: mongoose } = require("mongoose")
const Task = require("../../models/taskes/taskMoudle")


exports.createNewTask = async function (req, res) {
    try {
        if (req.body.index == undefined) {
            const _columnId = new mongoose.Types.ObjectId(req.body.columnId)
            let tasks = await Task.find({ columnId: _columnId })
            let index = tasks.length
            req.body.index = index
        }
        const data = await Task.create(req.body)
        return res.status(200).json({
            sucess: true,
            data
        })
    } catch (err) {
        return res.status(400).json({
            sucess: true,
            message: err.message
        })
    }
}

exports.getTask = async function (req, res) {
    try {
        const query = req.query
        const _columnId = new mongoose.Types.ObjectId(query?.columnId)
        const data = await Task.find({ columnId: _columnId })
        return res.status(200).json({
            sucess: true,
            data
        })
    } catch (err) {
        return res.status(400).json({
            sucess: false,
            message: err.message
        })
    }
}

exports.patchTask = async function (taskId, update) {
    try {
        const task = await Task.findById(taskId)
        const updateTask = await Task.findByIdAndUpdate(taskId, update, { new: true })
        let order = updateTask.index < task.index ? true : false 
        await reOrederCollections(updateTask.columnId, updateTask.index, updateTask._id,order,task.index)
        return updateTask
    } catch (error) {
        throw error
    }
}

async function reOrederCollections(columnId, taskNewIndex, newTaskId,order,oldIndex) {
    try {
        const _columnId = new mongoose.Types.ObjectId(columnId)
        let tasks = await Task.find({ columnId: _columnId })
        tasks = tasks.sort((a,b)=>a.index-b.index)
        console.log(tasks)
        if(order){
            tasks.forEach(async (task,index) => {
                if (task.index >= taskNewIndex && !task._id.equals(newTaskId)) {
                    task.index = index +1
                }
               await task.save();
            })
        }else{
            tasks.forEach(async (task,index) => {
                if (task.index <= taskNewIndex && task.index > oldIndex  && !task._id.equals(newTaskId)) {
                    task.index = task.index  -1
                }
               await task.save();
            })
        }
    } catch (error) {
        console.log(error)
    }
}