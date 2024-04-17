//react
import React, { useEffect, useState, useRef } from "react";
import { ColumnModul } from "../../../../utility/columnModul";
import { useQuery } from "react-query";
//dependecies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Droppable } from 'react-beautiful-dnd';
//api
import { getTasksByColumnId } from "../../../../api/tasksApi";
//components
import NewTaskModul from "./NewTaskModal";
import { TaskModul } from "../../../../modules/taskModul";
import TaskCard from "./taskCard"

import "../../../../cssFiles/comon.css"

async function getTasks(id: string, callBack: (input: TaskModul[]) => void) {
    const res = await getTasksByColumnId<TaskModul[]>(id)
    let data = res.data
    callBack(data)
}

interface props extends ColumnModul {
    draggingResault: any
}

export default function ColumnTabel(props: props): JSX.Element {
    const [isNewTaskModalOpen, setTaskModal] = useState<boolean>(false)
    const [tasks, setTasks] = useState<TaskModul[]>([])

    const { data, isLoading, isError } = useQuery(["fetch", [props._id]],
        async () => {
            await getTasks(props._id, (tasks: TaskModul[]) => setTasks(tasks.sort((a,b)=>a.index-b.index)))
        })
//reorganize the grid in the frontend 
    useEffect(() => {
        if (props.draggingResault == undefined || tasks == null) {
            return
        }
        if (props.draggingResault.dragResault.source.droppableId == props._id) { //remove the task from the source column
            setTasks((prev) => {
                let newState = [...prev]
                newState.splice(props.draggingResault.dragResault.source.index, 1)
                return newState
            })
        }
        if (props.draggingResault.dragResault.destination.droppableId == props._id) { ///add the task to new column in the destination index
            setTasks((prev) => {
                let newState = [...prev]
                newState.splice(props.draggingResault.dragResault.destination.index, 0, props.draggingResault.task.data)
                return newState
            })
        }
    }, [props.draggingResault])

    function toggleModal() {
        setTaskModal((prev) => !prev)
    }

    return (
        <>
            <Droppable droppableId={props._id} >
                {(provided) => (
                    <div className="flex h-lvh flex-col items-center " ref={provided.innerRef} {...provided.droppableProps}>
                        <div className="flex justify-between w-10/12 my-5 ">
                            <h2 className="font-bold">{props.columnName.toUpperCase()}</h2>
                            <FontAwesomeIcon className="p-1 hover:cursor-pointer" onClick={toggleModal} icon={faPlus} />
                        </div>
                        <div className="h-4/5 w-96 overflow-y-auto rounded p-2 mt-0 m-4 no-scrollbar ">
                            {
                                isError ? <div>try again...</div> : isLoading ? <div>loading</div> : tasks?.map((el, index) => {
                                    return <div className="my-3">
                                        <TaskCard task={el} index={index} key={el._id} />
                                    </div>
                                })
                            }
                        </div>
                        {provided.placeholder}
                    </div>

                )}

            </Droppable>

                {isNewTaskModalOpen ?  <NewTaskModul onDispatch={() => getTasks(props._id, (tasks: TaskModul[]) => setTasks(tasks))} isOpen={isNewTaskModalOpen} columnId={props._id} /> :<></>}
           
        </>

    )
}