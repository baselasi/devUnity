import { UserPublicProfile } from "../utility/user";

export interface TaskModul{
    taskName:string,
    description:string,
    id:string,
    creator:UserPublicProfile,
    assignee:UserPublicProfile,
    labels:LabelsModul[],
    importance:number
}

export interface LabelsModul{
    color:string,
    name:string,
}