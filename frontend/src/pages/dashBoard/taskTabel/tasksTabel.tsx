import React, { useEffect, useState } from "react";
import SideBar from "./sideBar";
import ColumnTabel from "./components/columnTable";

import { getData } from "../../../api/_baseApi";
import { getCoumnsByProjectId } from "../../../api/columsApi";

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
        let res = await getCoumnsByProjectId(project?._id)
        setColumns(() => {
            return res?.data?.data
        })
    }


    return (
        <>
            <div className="flex overflow-x-scroll bg-neutral-900 text-neutral-200  ">
                {columns?.map((el)=>{
                    return <ColumnTabel key={el._id} {...el} />
                })}
            </div>
        </>
    )
}