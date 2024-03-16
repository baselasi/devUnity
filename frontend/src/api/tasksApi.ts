

import { promises } from "dns";
import { BaseResponse } from "./_baseApi";
import { getData } from "./_baseApi";
import { TaskModul } from "../modules/taskModul";

export  async function getTasksByColumnId(columnId:string):Promise<TaskModul[]> {
    const res = await getData({apiUrl:`/api/task?columnId=${columnId}`})
    let response:TaskModul[]
    let task:TaskModul
    console.log(res)
    try {
        response =  res.data.tasks.map((el:any)=>{
            console.log(el.taskName)
            debugger
            task.taskName = el.taskName
            console.log(task)
            return task
        })
            console.log(response)
            console.log(res.data.tasks)
            return res.data.tasks
    } catch (err) {
        console.log(err )
        return []
    }
   
}