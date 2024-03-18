import React, { useEffect, useRef, useState } from "react";

//component
import MyModal from "../../../../components/modalTemplate/Modal";

//api
import { postNewTask, TaskPostModul } from "../../../../api/tasksApi";



export default function NewTaskModul(props: any): JSX.Element {
    const [taskForm, setTaskForm] = useState<TaskPostModul>({
        columnId: props.columnId
    })
    const [isModalOpen, setIsModalOpen] = useState<boolean>(props.isOpen)

    useEffect(() => {
        setIsModalOpen((prev) => !prev)
    }, [props.isOpen])
    const newTaskForm = useRef(null)


    function handelInput(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setTaskForm((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function toggleModal() {
        setIsModalOpen((prev) => !prev)
    }

    async function postTask(form: TaskPostModul | undefined) {
        const res = await postNewTask(form)
        props.onDispatch()
        toggleModal()
    }

    return (
        <MyModal width="w-3/6" isOpen={isModalOpen} onClose={toggleModal} title="Create New Task">
            <div className=" shadow-md rounded text-black pt-6 pb-8 mb-4" >
                <form className="px-20 border-b pb-3" ref={newTaskForm} >
                    <div className="mb-4 " >
                        <input onChange={handelInput} type="text" name="taskName" className="my-input " id="floatingInput" placeholder="task tilte*" />
                    </div>
                    <div className="relative ">
                        {/* <label htmlFor="exampleInputPassword1" className="text-blue-500">Password</label> */}
                        <input onChange={handelInput} type="number" name="impoartance" className="my-input" placeholder="task importance*" />
                    </div>
                </form>
                <div className="flex justify-end">
                    <input className=" cancel-btn  p-1 px-1 w-1/6 mx-3 mt-3" type="button" value="cancel" onClick={toggleModal} />
                    <input className=" my-btn  mx-3 p-1 w-1/6 px-1   mt-3" type="button" value="save" onClick={() => postTask(taskForm)} />
                </div>
            </div>
        </MyModal>
    )
}