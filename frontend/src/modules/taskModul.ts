import { UserPublicProfile } from "../utility/user";

export interface TaskModul{
    taskName?:string,
    _id:string,
    creator?:UserPublicProfile,
    assignee?:UserPublicProfile,
    labels?:LabelsModul[],
    importance?:number,
    index:number
}

export interface LabelsModul{
    color:string,
    name:string,
}