import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
//component
import MyModal from "../../../../components/modalTemplate/Modal";
import MultipleSelect from "../../../../components/comon/MultiplSelect";
// import MultipleSelect from "../../../../components/comon/MultiplSelect";

//api
import { postNewTask, TaskPostModul } from "../../../../api/tasksApi";
import { getUser } from "../../../../api/userApi";

import { UserPublicProfile } from "../../../../utility/user";
import { ListItem } from "../../../../utility/comonInterfaces";


async function getAllMembers(): Promise<ListItem[]> {
    let res = await getUser("", "")
    console.log(res)
    let teamMembers: ListItem[] = res.map((member) => {
        return { value: member._id, label: member.sigla }
    })
    console.log(teamMembers)
    return teamMembers
}


export default function NewTaskModul(props: any): JSX.Element {
    const [taskForm, setTaskForm] = useState<TaskPostModul>({
        columnId: props.columnId
    })
    const [isModalOpen, setIsModalOpen] = useState<boolean>(props.isOpen)
    const [selectedTeamMembers,setSelectedTeamMembers ] =useState()
    const { data, isLoading, isError } = useQuery(["fetch", []], getAllMembers)

    useEffect(() => {
        getAllMembers()
        setIsModalOpen((prev) => !prev)
    }, [props.isOpen])

    const newTaskForm = useRef(null)

    function handelInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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

    function handelTeamMeberInput(e:ListItem[]){
        const assigneeId = e.map((item)=>{
            return item.value
        })
        setTaskForm((prev)=>{
            return {
                ...prev,
                assignee:assigneeId
            }
        })
    }

    console.log(taskForm)


    return (
        <MyModal width="w-3/6" isOpen={isModalOpen} onClose={toggleModal} title="Create New Task">
            <div className="  rounded  bg-black pt-6 pb-8 mb-4" >
                <form className="px-20 pb-3" ref={newTaskForm} >
                    <div className="mb-4 " >
                        <input onChange={handelInput} type="text" name="taskName" className="my-input " id="floatingInput" placeholder="task tilte*" />
                    </div>
                    <div className="relative mb-4 ">
                        {/* <label htmlFor="exampleInputPassword1" className="text-blue-500">Password</label> */}
                        <input onChange={handelInput} type="number" name="impoartance" className="my-input" placeholder="task importance" />
                    </div>
                    <div className="mb-4 " >
                        <textarea onChange={handelInput} name="description" className="my-text-area " placeholder="description" />
                    </div>
                    <MultipleSelect
                        title="member"
                        className="text-black"
                        isMulti={true}
                        listItem={data}
                        onSelectChange={(e)=>handelTeamMeberInput(e)}
                    />
                </form>
                <div className="flex justify-end">
                    <input className=" cancel-btn  p-1 px-1 w-1/6 mx-3 mt-3" type="button" value="cancel" onClick={toggleModal} />
                    <input className=" my-btn  mx-3 p-1 w-1/6 px-1   mt-3" type="button" value="save" onClick={() => postTask(taskForm)} />
                </div>
            </div>
        </MyModal>
    )
}