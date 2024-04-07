
import { UserPublicProfile } from "../utility/user";
import { getData } from "./_baseApi";
import { BaseResponse } from "./_baseApi";

export async  function getUser(userId:string,projectId:string):Promise<UserPublicProfile[]>{
    try {
        const res = await getData({apiUrl:`/api/users`})
        let users:UserPublicProfile[] = res.data
        return users
    } catch (error) {
        throw Error
    } 
}

function createUserSigla(){

}