import { UserPublicProfile } from "../utility/user";

export interface TaskModul{
    taskName:string,
    description:string,
    id:string,
    creator:UserPublicProfile,
    assignee:UserPublicProfile,
    labels:any[],
    importance:number
}