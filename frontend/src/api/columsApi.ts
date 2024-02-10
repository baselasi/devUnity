import { getData } from "./_baseApi";
import { BaseResponse } from "./_baseApi";
import { ColumnModul } from "../utility/columnModul";




export async function getCoumnsByProjectId(porjectId:string|undefined):Promise<BaseResponse<ColumnModul>> {
    return await getData({apiUrl:`/api/column?projectId=${porjectId}`})
}