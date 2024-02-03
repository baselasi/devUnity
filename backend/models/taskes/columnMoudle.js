

const mongoose = require("mongoose")

const columnSchema = new mongoose.Schema({
    columnName:{
        type:String,
        required:[true ,"please add a cloumn name"],
        unique:true
    },
    position:{
        type:Number,
        // required   ???
    },
    projectId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' ,required:true},
    comment:{
        type:String
    },
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    
}) 

module.exports = mongoose.model("cloumn",columnSchema)