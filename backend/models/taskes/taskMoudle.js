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
    columnId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' },
    assignee:{
        userName:{
            type:String
        },
        userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    taskCreator:{
        userName:{
            type:String
        },
        userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    labels:{
        type:[Number]
    },
    importance:{
        type:Number
    }
})


module.exports = mongoose.model("task",taskSchema)