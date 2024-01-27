

const Task = require("../../models/taskes/taskMoudle")


exports.createNewTask = async function (req,res){
    try{
        const task = await Task.create(req.body.data)
        return res.status(200).json({
            sucess:true,
            task
        })
    }catch{
        return res.status(400).jsom({
            sucess:true,
            message: err.message
        })
    }
}