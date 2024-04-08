

import { BaseResponse } from "./_baseApi";
import { getData, postData, patchData } from "./_baseApi";
import { TaskModul } from "../modules/taskModul";
import { UserPublicProfile } from "../utility/user";
import { ListItem } from "../utility/comonInterfaces";
export interface TaskPostModul {
    taskName?: string,
    columnId?: string,
    assignee?:string[],                  //UserPublicProfile,
    creator?: UserPublicProfile,
    importance?: number,
   
}

export async function getTasksByColumnId<TaskModul>(columnId: string): Promise<BaseResponse<TaskModul>> {
    const baseResponse = new BaseResponse<TaskModul>
    try {
        const res = await getData<TaskModul>({ apiUrl: `/api/task?columnId=${columnId}` })
        return res
    } catch (err) {
        console.log(err)
        baseResponse.status=500
        baseResponse.sucess=false
        return baseResponse
    }
}

export async function postNewTask<TaskModul>(body: TaskPostModul | undefined): Promise<BaseResponse<TaskModul>> {
    const baseResponse = new BaseResponse<TaskModul>
    const payload = JSON.stringify(body)
    try {
        const res = await postData<TaskModul>({ apiUrl: "/api/task" }, payload)
        return res
    } catch (err) {
        console.log(err)
        baseResponse.status=500
        baseResponse.sucess=false
        return baseResponse
    }
}

export async function patchTask<T>(body: any,taskIdd:string): Promise<BaseResponse<T>>{ ///// rethink types
    const baseResponse = new BaseResponse<TaskModul>
    const payload = JSON.stringify(body)
    try{
        const res = await patchData<TaskModul>({apiUrl:`/api/task?taskId=${taskIdd}`},payload)
        return res
    }catch(err){
        baseResponse.status = 500
        baseResponse.sucess = false
        return baseResponse
    }
}

export async function getLables<T>(projectId:string):Promise<BaseResponse<T>> {
    const baseResponse = new BaseResponse<ListItem[]>
    try {
        const res =await getData<ListItem[]>({apiUrl:`api/labels?projectId=${projectId}`})
        return res
    } catch (error) {
        baseResponse.status = 500
        baseResponse.sucess=false
        return baseResponse
    }
}