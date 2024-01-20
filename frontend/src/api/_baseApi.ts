


export class BaseResponse{
    sucess?:boolean
    status?:number
    errore?:Error
    data?:any
    total?:number
    constructor(){
        this.sucess =true
        this.status =200
    }
}

export async function postRequest(){

}