import axios from "axios"

const axiosInstance = axios.create({
})
export class BaseResponse<type>{
    sucess?: boolean
    status?: number
    errore?: Error
    data?: any
    total?: number
    constructor() {
        this.sucess = true
        this.status = 200
    }
}

export async function postRequest() {

}

export async function getData<T>({ apiUrl }: { apiUrl: string }): Promise<BaseResponse<T>> {
    let baseResponse = new BaseResponse<T>()
    try {
        return baseResponse
    } catch (err) {
        console.log(err)
        baseResponse.sucess = false
        baseResponse.status = 500
        return baseResponse
    }
}
