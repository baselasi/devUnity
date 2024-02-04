const Column = require("../../models/taskes/columnMoudle")
const {MongoClient} = require("mongoose")
const mongoose = require("mongoose")

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

exports.getColumn = async function(criteria){
    try{
        const projectIdObjectId =new mongoose.Types.ObjectId(criteria?.projectId);
        console.log(projectIdObjectId)
        const cloumns = await Column.find({projectId:projectIdObjectId})  //.populate('projectId')
        // return res.status(200).json({
        //     sucess:true,
        //     cloumns
        // })
        return cloumns
    }catch(err){
        console.log(err)
       throw err
    }
}

