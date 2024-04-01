const Column = require("../../models/taskes/columnMoudle")
const {MongoClient} = require("mongoose")
const mongoose = require("mongoose")

exports.createNewColumn = async function (req,res){
    try {
        const data = await Column.create(req.body)
        return res.status(200).json({
            sucess:true,
            data
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
        const data = await Column.find({projectId:projectIdObjectId})  //.populate('projectId')
        // return res.status(200).json({
        //     sucess:true,
        //     cloumns
        // })
        return data
    }catch(err){
        console.log(err)
       throw err
    }
}

