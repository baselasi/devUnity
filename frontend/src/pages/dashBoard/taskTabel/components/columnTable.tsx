
import React, { useEffect, useState, useRef } from "react";
import { ColumnModul } from "../../../../utility/columnModul";
import { useQuery } from "react-query";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faPlus} from "@fortawesome/free-solid-svg-icons"
import { getTasksByColumnId } from "../../../../api/tasksApi";
import { postNewTask, TaskPostModul } from "../../../../api/tasksApi";

//components
import NewTaskModul from "./NewTaskModal";
import { TaskModul } from "../../../../modules/taskModul";
import TaskCard from "./taskCard"
import MyModal from "../../../../components/modalTemplate/Modal";

async function getTasks(id: string, callBack: (stuf: TaskModul[]) => void) {
    const res: TaskModul[] = await getTasksByColumnId(id)
    callBack(res)
}

export default function ColumnTabel(props: ColumnModul): JSX.Element {
    const [isNewTaskModalOpen, setTaskModal] = useState<boolean>(false)
    const [task, setTask] = useState<TaskModul[] | null>(null)
    const { data, isLoading, isError } = useQuery(["fetch",[props]], () => getTasks(props._id, (tasks: TaskModul[]) => setTask(tasks)))

    function toggleModal() {
        setTaskModal((prev) => !prev)
    }

    return (
        <>
            <div className="flex h-lvh flex-col items-center ">
                <div className="flex justify-between w-3/6 m-5">
                    <h2>{props.columnName}</h2>
                    <FontAwesomeIcon className="p-1 hover:cursor-pointer" onClick={toggleModal} icon={faPlus} />
                </div>
                <div className="h-4/5 w-96 overflow-y-hidden rounded p-2 mt-0 m-4  ">
                    {
                        isError ? <div>try again...</div> : isLoading ? <div>loading</div> : task?.map((el) => {
                            return <div className="my-3">
                                <TaskCard {...el} />
                            </div>
                        })
                    }
                </div>
            </div>
            <NewTaskModul onDispatch={()=> getTasks(props._id, (tasks: TaskModul[]) => setTask(tasks))} isOpen={isNewTaskModalOpen} columnId={props._id}/>
            {/* <MyModal width="w-3/6" isOpen={isNewTaskModalOpen} onClose={toggleModal} title="Create New Task">
                <div className=" shadow-md rounded  pt-6 pb-8 mb-4" >
                    <form className="px-20 border-b pb-3" ref={newTaskForm} >
                        <div className="mb-4 " >
                            <input onChange={handelInput} type="text" name="taskName" className="my-input " id="floatingInput" placeholder="task tilte*" />
                        </div>
                        <div className="relative ">
                            <input onChange={handelInput} type="number" name="impoartance" className="my-input" placeholder="task importance*" />
                        </div>
                    </form>
                    <div className="flex justify-end">
                        <input className=" cancel-btn  p-1 px-1 w-1/6 mx-3 mt-3" type="button" value="cancel" onClick={toggleModal} />
                        <input className=" my-btn  mx-3 p-1 w-1/6 px-1   mt-3" type="button" value="save" onClick={() => postTask(taskForm)} />
                    </div>
                </div>
            </MyModal> */}

        </>

    )
}