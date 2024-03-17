
import React, { useEffect, useState,useRef } from "react";
import { ColumnModul } from "../../../../utility/columnModul";
import { useQuery } from "react-query";

import { getTasksByColumnId } from "../../../../api/tasksApi";
import { postNewTask ,TaskPostModul} from "../../../../api/tasksApi";

import { TaskModul } from "../../../../modules/taskModul";
import TaskCard from "./taskCard"
import MyModal from "../../../../components/modalTemplate/Modal";
import { json } from "stream/consumers";

async function getTasks(id: string, callBack: (stuf: TaskModul[]) => void) {
    const res: TaskModul[] = await getTasksByColumnId(id)
    callBack(res)
}



export default function ColumnTabel(props: ColumnModul): JSX.Element {
    const [isNewTaskModalOpen, setTaskModal] = useState<boolean>(false)
    const [task, setTask] = useState<TaskModul[] | null>(null)
    const { data, isLoading, isError } = useQuery(["fetch"], () => getTasks(props._id, (stuf: TaskModul[]) => setTask(stuf)))
    const [taskForm,setTaskForm] = useState<TaskPostModul>()

    const newTaskForm = useRef<HTMLFormElement>(null)

    function toggleModal() {
        setTaskModal((prev) => !prev)
    }

    function handelInput(e: React.ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target
        setTaskForm((prev)=>{
            console.log(prev)
            return{
                ...prev,
                [name]:value
            }
        })
    }

    async function postTask(form:TaskPostModul|undefined ){
        const res = await postNewTask(form)
    }

    return (
        <>
            <div className="flex h-lvh flex-col items-center justify-around ">
                <h2>{props.columnName}</h2>
                <button className="my-btn  " onClick={toggleModal}>new task</button>
                <div className="h-4/5 w-96 overflow-y-hidden rounded p-2 mt-0 m-4 border-2 shadow-xl">
                    {
                        isError ? <div>try again...</div> : isLoading ? <div>loading</div> : task?.map((el) => {
                            return <TaskCard {...el} />
                        })
                    }
                </div>
            </div>
            <MyModal width="w-3/6" isOpen={isNewTaskModalOpen} onClose={toggleModal} title="Create New Task">
                <div className=" bg-white shadow-md rounded  pt-6 pb-8 mb-4" >
                    <form className="px-20 border-b pb-3" ref={newTaskForm} >
                        <div className="mb-4 " >
                            <input onChange={handelInput} type="text" name="taskName" className="my-input " id="floatingInput" placeholder="task tilte*" />
                        </div>
                        <div className="relative ">
                            {/* <label htmlFor="exampleInputPassword1" className="text-blue-500">Password</label> */}
                            <input  onChange={handelInput} type="number" name="impoartance" className="my-input"  placeholder="task importance*" />
                        </div>
                    </form>
                    <div className="flex justify-end">
                        <input className=" cancel-btn  p-1 px-1 w-1/6 mx-3 mt-3" type="button" value="cancel" onClick={toggleModal} />
                        <input className=" my-btn  mx-3 p-1 w-1/6 px-1   mt-3" type="button" value="save" onClick={()=>postTask(taskForm)} />
                    </div>
                </div>
            </MyModal>

        </>

    )
}