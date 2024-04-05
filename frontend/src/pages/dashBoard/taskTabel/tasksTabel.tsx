import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import SideBar from "./sideBar";
import ColumnTabel from "./components/columnTable";
import { DragDropContext } from 'react-beautiful-dnd';

import { getData } from "../../../api/_baseApi";
import { getCoumnsByProjectId } from "../../../api/columsApi";
import { patchTask } from "../../../api/tasksApi"

import { useSelector } from "react-redux";
import rootReducer, { RootState } from "../../../reducers/rootReducer";

import { ColumnModul } from "../../../utility/columnModul";
import { TaskModul } from "../../../modules/taskModul";

interface ColumnArray {
    cloumns: ColumnModul[]
}

interface dragResault {
    task?:TaskModul
    dragResault?:any
}


export default function TaskTabel(): JSX.Element {
    const [columns, setColumns] = useState<ColumnModul[]>()
    const project = useSelector((state: RootState) => state.project.projectInfo)
    const { data, isLoading, isError } = useQuery(["fetch", [project]], async () => await getProjects())
    const [draggingResault, setResault] = useState<dragResault>()

    async function getProjects() {
        let res = await getCoumnsByProjectId(project?._id)
        setColumns(res.data)
    }

    async function onDragEnd(result: any) {
        const columnId: string = result.destination.droppableId
        const payload = { columnId: columnId , index :result.destination.index}
        const res = await patchTask(payload, result.draggableId)
        // await getProjects()
        setResault({task:res.data,dragResault:result})//find a way to set dragging results before the patch response, by giving it a initial value 
}
return (        
    <>
        <DragDropContext onDragEnd={(result) => onDragEnd(result)} >
            <div className="flex overflow-x-scroll bg-neutral-900 text-neutral-200  ">
                {columns?.map((el) => {
                    return <ColumnTabel key={el._id} draggingResault={draggingResault}  {...el} />
                })}
            </div>
        </DragDropContext>

    </>
)
}