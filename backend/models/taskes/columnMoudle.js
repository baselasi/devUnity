

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
    }
}) 

module.exports = mongoose.model("cloumn",columnSchema)