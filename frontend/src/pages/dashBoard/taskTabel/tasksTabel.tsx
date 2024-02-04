import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import { getData } from "../../../api/_baseApi";

import { useSelector } from "react-redux";
import rootReducer, { RootState } from "../../../reducers/rootReducer";

import { ColumnModul } from "../../../utility/columnModul";

interface ColumnArray {
    cloumns: ColumnModul[]
}


export default function TaskTabel(): JSX.Element {
    const [columns, setColumns] = useState<ColumnModul[] | null>(null)
    const project = useSelector((state: RootState) => state.project.projectInfo)

    useEffect((() => {
        getProjects()
    }), [project])

    async function getProjects() {
        let res = await getData({ apiUrl: `/api/column` }, { projectId: project?._id })
        setColumns(() => {
            return res.data.data
        })
    }

    console.log(columns)

    return (
        <>
            <div>
                {columns?.map((el)=>{
                    return el.columnName
                })}
            </div>
        </>
    )
}