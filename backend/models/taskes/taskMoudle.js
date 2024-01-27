const mongoose = require("mongoose")


const assigneeProfile = new mongoose.Schema({
    userName:{
        type:String
    },
    user_id:{
        type:String
    },
    userSigla:{
        type:String
    }
})

const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
    },
    column_id:{
        type:String
    },
    assignee:[assigneeProfile],
    taskCreator:[assigneeProfile],
    labels:{
        type:[Number]
    },
    importance:{
        type:Number
    }
})


module.exports = mongoose.model("task",taskSchema)