const mongoose = require("mongoose")

const taskLabels = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    colore:{
        type:Number,
        require:true
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId, ref: 'Project' 
    }
})

module.exports = mongoose.model("Lable",taskLabels)