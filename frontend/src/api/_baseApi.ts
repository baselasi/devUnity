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
        let data:any = res.data
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

interface Criteria  {
    projectId: string|undefined,
    // Add other criteria if needed
};


export async function getData<T>({ apiUrl }: { apiUrl: string }): Promise<BaseResponse<T>> {
    let baseResponse = new BaseResponse<T>()
    try {
        const res = await axiosInstance.get<T>(`${apiUrl}`)
        let data:any = res.data
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
