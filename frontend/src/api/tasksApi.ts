

import { promises } from "dns";
import { BaseResponse } from "./_baseApi";
import { getData } from "./_baseApi";
import { TaskModul } from "../modules/taskModul";

async function getTasksByColumnId(columnId:string):Promise<TaskModul[]> {
    const res = await getData({apiUrl:`/api/tasks?columnId=${columnId}`})
    let response:TaskModul[]
    let task:TaskModul
    response =  res.data.map((el:any)=>{
        task.assignee = el.assignee
        task.creator = el.creator
        task.importance = el.importance
        task.id = el._id
        task.taskName = el.taskName
        task.labels = el.labels
        return task

    })
    return response
}