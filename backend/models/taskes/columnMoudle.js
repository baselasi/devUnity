

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
    comment:{
        type:String
    },
    creator:{
        type:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
}) 

module.exports = mongoose.model("cloumn",columnSchema)