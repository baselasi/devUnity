
const Labels = require("../../models/taskes/tasksLabels")

exports.postLabel = async function (req,res){
    try {
        const data = await Labels.create(req.body)
        return res.status(200).json({
            sucess:true,
            data
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message:error.message
        })
    }
}

exports.getLabels = async function (req,res){
    try {
        const data = await Labels.find({projectId:req.query.projectId})
        return res.status(200).json({
            sucess:true,
            data    
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message:error.message
        })
    }
}