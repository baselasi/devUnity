
import React, { useEffect } from "react";
import { ColumnModul } from "../../../../utility/columnModul";
import { useQuery } from "react-query";

import { getTasksByColumnId } from "../../../../api/tasksApi";

import  TaskCard from "./taskCard" 

async function getTasks(id:string){
    console.log(id)
    const res = await getTasksByColumnId(id)
    console.log(res)
}

export default function ColumnTabel(props:ColumnModul): JSX.Element {
    // useEffect(()=>{getTasks(props._id)},[])
    const {data,isLoading,isError} = useQuery(["fetch",props],()=>  getTasks(props._id))
    console.log(props)
    return (
        <>
            <div className="flex h-lvh flex-col items-center justify-around">
                <h2>{props.columnName}</h2>
                <div className="h-4/5 w-96 overflow-y-hidden rounded p-2 mt-0 m-4 border-2 shadow-xl">
                    {
                        isError ? <div>try again...</div> : isLoading ?<div>loading</div> : <div></div>
                    }
                </div>  
            </div>

        </>

    )
}