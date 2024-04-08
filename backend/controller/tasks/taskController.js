

const { default: mongoose } = require("mongoose")
const Task = require("../../models/taskes/taskMoudle")
const User = require("../../models/users");


exports.createNewTask = async function (req, res) {
    try {
        if (req.body.index == undefined) {
            const _columnId = new mongoose.Types.ObjectId(req.body.columnId)
            let tasks = await Task.find({ columnId: _columnId })
            let assigneeId = req.body.assignee
            let assigneePromies = assigneeId.map(async(id)=>{
                let user = await User.findById(id).select("sigla username _id")
                console .log(id)
                return user.toObject()
            })
            const assignee = await Promise.all(assigneePromies)
            console.log(assignee)
            let index = tasks.length
            req.body.index = index
            req.body.assignee = assignee
            console.log(req.body)
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
        console.log(update)
        const task = await Task.findById(taskId)
        console.log(task)
        const updateTask = await Task.findByIdAndUpdate(taskId, update, { new: true })
        console.log(task)
        let order = updateTask.index < task.index ? true : false 
        await reOrederCollections(updateTask.columnId, updateTask.index, updateTask._id,order,task.index)
        return updateTask
    } catch (error) {
        throw error
    }
}

async function reOrederCollections(columnId, taskNewIndex, newTaskId,order,oldIndex) {
    console.log(oldIndex)
    console.log(taskNewIndex)
    try {
        const _columnId = new mongoose.Types.ObjectId(columnId)
        let tasks = await Task.find({ columnId: _columnId })
        // tasks = tasks.sort((a,b)=>a.index-b.index)
        // console.log(tasks)
        // if(order){
        //     tasks.forEach(async (task,index) => {
        //         if (task.index >= taskNewIndex && !task._id.equals(newTaskId)) {
        //             task.index = index +1
        //         }
        //        await task.save();
        //     })
        // }else{
        //     tasks.forEach(async (task,index) => {
        //         if (task.index <= taskNewIndex && task.index > oldIndex  && !task._id.equals(newTaskId)) {
        //             task.index = task.index  -1
        //         }
        //        await task.save();
        //     })
        // }
        const taskToMove = tasks.splice(oldIndex,1)[0]
        tasks.splice(taskNewIndex,0,taskToMove)
        console.log(tasks)
        let updatedTasks = tasks.map((task,index)=>{
            return { ...task, index };
        })
        const bulkUpDate = updatedTasks.map((task)=>({
            updateOne: {
                filter: { _id: task._id },
                update: { $set: { index: task.index } }
            }
        }))
        await Task.bulkWrite(bulkUpDate)

    } catch (error) {
        console.log(error)
    }
}