

const { default: mongoose } = require("mongoose")
const Task = require("../../models/taskes/taskMoudle")


exports.createNewTask = async function (req,res){
    try{
        const task = await Task.create(req.body)
        return res.status(200).json({
            sucess:true,
            task
        })
    }catch(err){
        return res.status(400).jsom({
            sucess:true,
            message: err.message
        })
    }
}

exports.getTask = async function(req,res){
    try {
        const query = req.query
        const _columnId = new mongoose.Types.ObjectId(query?.columnId)
        const tasks = await Task.find({columnId:_columnId})
        res.status(200).json({
            sucess:true,
            tasks
        })
    }catch(err){
        res.status(400).json({
            sucess:false,
            message: err.message
        })
    }
}