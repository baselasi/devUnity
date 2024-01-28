
const mongoose = require("mongoose")

const projectModle = new mongoose.Schema({
    projectName: {
        type:String,
        trim:true,
        require:[true,"please insert a project name"],
        unique:true
    },
    description:{
        type:String
    }
})


module.exports = mongoose.model("Project",projectModle)