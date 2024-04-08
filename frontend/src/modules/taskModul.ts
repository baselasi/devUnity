import { UserPublicProfile } from "../utility/user";

export interface TaskModul{
    taskName?:string,
    _id:string,
    creator?:UserPublicProfile,
    assignee?:UserPublicProfile[],
    labels?:LabelsModul[],
    importance?:number,
    index:number
}

export interface LabelsModul{
    projectId:string,
    colore:string,
    name:string,
    _id:string
}