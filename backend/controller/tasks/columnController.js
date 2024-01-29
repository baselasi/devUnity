const Column = require("../../models/taskes/columnMoudle")
const {MongoClient} = require("mongoose")


exports.createNewColumn = async function (req,res){
    try {
        const column = await Column.create(req.body)
        return res.status(200).json({
            sucess:true,
            column
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message: error.message
        })
    }
}

exports.getColumn = async function(req,res){
    try{
        const cloumns = await Column.find().populate('projectId')
        return res.status(200).json({
            sucess:true,
            cloumns
        })
    }catch(err){
        res.status(400).json({
            sucess:false,
            message: err.message
        })
    }
}

