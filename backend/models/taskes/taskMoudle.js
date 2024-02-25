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
    assignee: new mongoose.Schema({
        userName:{
            type:String
        },
        id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        userSigla:{
            type:String
        }
    }),
    // {
        
        // userName:{
        //     type:String
        // },
        // userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    // },
    creator:new mongoose.Schema({
        userName:{
            type:String
        },
        id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        userSigla:{
            type:String
        }
    }),
    // {
    //     userName:{
    //         type:String
    //     },
    //     userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    // },
    labels:{
        type:[Number]
    },
    importance:{
        type:Number
    }
})


module.exports = mongoose.model("task",taskSchema)