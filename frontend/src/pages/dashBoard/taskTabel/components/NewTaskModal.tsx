import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
//component
import MyModal from "../../../../components/modalTemplate/Modal";
import MultipleSelect from "../../../../components/comon/MultiplSelect";
// import MultipleSelect from "../../../../components/comon/MultiplSelect";

//api
import { postNewTask, TaskPostModul, getLables } from "../../../../api/tasksApi";
import { getUser } from "../../../../api/userApi";

//types
import { UserPublicProfile } from "../../../../utility/user";
import { ListItem } from "../../../../utility/comonInterfaces";
import { LabelsModul } from "../../../../modules/taskModul";


async function getAllMembers(): Promise<ListItem[]> {
    let res = await getUser("", "")
    let teamMembers: ListItem[] = res.map((member) => {
        return { value: member._id, label: member.sigla }
    })
    return teamMembers
}

async function getAllLabels(): Promise<ListItem[]> {
    let res = await getLables("65b7f64ac2ee168f566f6975")
    const lables: LabelsModul[] = res.data
    const selectItems = createSelectItem(lables)
    return selectItems
}

function createSelectItem(labelsArray: LabelsModul[]): ListItem[] {
    const output = labelsArray.map((item) => {
        return {
            label: item.name,
            value: item._id
        }
    })
    return output
}

export default function NewTaskModul(props: any): JSX.Element {
    const [taskForm, setTaskForm] = useState<TaskPostModul>({
        columnId: props.columnId
    })
    const [isModalOpen, setIsModalOpen] = useState<boolean>(props.isOpen)
    const [selectedTeamMembers, setSelectedTeamMembers] = useState()
    const { data: labels, isLoading: labelsLoding, isError: labelsError } = useQuery(["labels", []], getAllLabels)
    const { data: teamMembers, isLoading, isError } = useQuery(["teamMembers", []], getAllMembers)


    useEffect(() => {
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
        console.log(form)
        const res = await postNewTask(form)
        props.onDispatch()
        toggleModal()
    }

    function handelTeamMeberInput(e: ListItem[]) {
        console.log(e)
        const assigneeId = e.map((item) => {
            return item.value
        })
        setTaskForm((prev) => {
            return {
                ...prev,
                assignee: assigneeId
            }
        })
    }

    function handellabelInput(e: ListItem[]) {
        // console.log(e)
        // const labelsId = e.map((item) => {
        //     return item.value
        // })
        // setTaskForm((prev) => {
        //     return {
        //         ...prev,
        //         labels: labelsId
        //     }
        // })
    }

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
                    <div className="mb-4 ">
                        <MultipleSelect
                            title="member"
                            className="text-black"
                            isMulti={true}
                            listItem={teamMembers}
                            onSelectChange={(e) => handelTeamMeberInput(e)}
                        />
                    </div>
                    <div className="mb-4 ">
                        <MultipleSelect
                            title="labels"
                            className="text-black"
                            isMulti={true}
                            listItem={labels}
                            onSelectChange={(e) => handellabelInput(e)}
                        />
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