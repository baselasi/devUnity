const mongoose = require("mongoose")


const assigneeProfile = new mongoose.Schema({
    userName:{
        type:String
    },
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userSigla:{
        type:String
    }
})

const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
    },
    columnId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' },
    index:{
        type:Number,
    },
    assignee: ([{
        username:{
            type:String
        },
        _id:{ type: String},
        sigla:{
            type:String
        }
    }]),
    creator:new mongoose.Schema({
        userName:{
            type:String
        },
        id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        userSigla:{
            type:String
        }
    }),
    labels:[{
        name:{type:String},
        id:{type:String},
        colore:{type:Number}
    }],
    importance:{
        type:Number
    },
    description:{
        type:String
    }
})


module.exports = mongoose.model("task",taskSchema)