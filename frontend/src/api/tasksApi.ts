

import { promises } from "dns";
import { BaseResponse } from "./_baseApi";
import { getData, postData } from "./_baseApi";
import { TaskModul } from "../modules/taskModul";
import { UserPublicProfile } from "../utility/user";
import { Retryer } from "react-query/types/core/retryer";
export interface TaskPostModul {
    taskName?: string,
    columnId?: string,
    assignee?: UserPublicProfile,
    creator?: UserPublicProfile,
    importance?: number
}

export async function getTasksByColumnId(columnId: string): Promise<TaskModul[]> {
    const res = await getData({ apiUrl: `/api/task?columnId=${columnId}` })
    let response: TaskModul[]
    let task: TaskModul
    try {
        response = res.data.tasks.map((el: any) => {
            task = { ...el }
            return task
        })
        return res.data.tasks
    } catch (err) {
        console.log(err)
        return []
    }
}

export async function postNewTask<T>(body: TaskPostModul|undefined): Promise<BaseResponse<T>> {
    const baseResponse = new BaseResponse
    const payload = JSON.stringify(body)
    console.log(payload)
    try {
        const res = await postData({ apiUrl: "/api/task" }, payload)
        console.log(res)
        return baseResponse
    } catch (err) {
        console.log(err)
        return baseResponse
    }

}