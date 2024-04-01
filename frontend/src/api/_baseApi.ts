import axios from "axios"

const baseUrlApi="http://localhost:4000/"

const token =localStorage.getItem("token")

const axiosInstance = axios.create({
    baseURL: baseUrlApi,
    headers: {
        'Content-Type': 'application/json', // Default content type
        'token': `${token}` 
      }
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

export async function postData<T>({ apiUrl }: { apiUrl: string },body:string): Promise<BaseResponse<T>> {
    let baseResponse = new BaseResponse<T>()
    try {
        const res = await axiosInstance.post<T>(`${apiUrl}`,body)
        console.log(res)
        let data:T = res.data
        baseResponse.data = data
        baseResponse.status=res.status
        // baseResponse.sucess=res.scuess  // LOOK IT UP 
        return baseResponse
    } catch (err) {
        console.log(err)
        baseResponse.sucess = false
        baseResponse.status = 500
        return baseResponse
    }
}

export async function getData<T>({ apiUrl }: { apiUrl: string }): Promise<BaseResponse<T>> {
    let baseResponse = new BaseResponse<T>
    try {
        const res = await axiosInstance.get(`${apiUrl}`)
        baseResponse.data =  res.data.data
        baseResponse.status=res.status
        return baseResponse
    } catch (err) {
        console.log(err)
        baseResponse.sucess = false
        baseResponse.status = 500
        return baseResponse
    }
}

export async function patchData<T>({apiUrl}:{apiUrl:string},body:string):Promise<BaseResponse<T>> {
    let baseResponse = new BaseResponse<T>
    try {
        const res = await axiosInstance.patch<T>(`${apiUrl}`,body)
        baseResponse.status = res.status
        baseResponse.data = res.data
        return baseResponse
    } catch (error) {
        baseResponse.status=500
        baseResponse.sucess=true
        return  baseResponse
        
    }
}
