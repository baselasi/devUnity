//react
import React, { useEffect, useState, useRef } from "react";
import { ColumnModul } from "../../../../utility/columnModul";
import { useQuery } from "react-query";
//dependecies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faPlus} from "@fortawesome/free-solid-svg-icons"
import { Droppable } from 'react-beautiful-dnd';
//api
import { getTasksByColumnId } from "../../../../api/tasksApi";
//components
import NewTaskModul from "./NewTaskModal";
import { TaskModul } from "../../../../modules/taskModul";
import TaskCard from "./taskCard"

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
        <Droppable droppableId={props._id}>
            {(provided)=>(
                      <div className="flex h-lvh flex-col items-center " ref={provided.innerRef} {...provided.droppableProps}>
                      <div className="flex justify-between w-3/6 m-5">
                          <h2>{props.columnName}</h2>
                          <FontAwesomeIcon className="p-1 hover:cursor-pointer" onClick={toggleModal} icon={faPlus} />
                      </div>
                      <div className="h-4/5 w-96 overflow-y-hidden rounded p-2 mt-0 m-4  ">
                          {
                              isError ? <div>try again...</div> : isLoading ? <div>loading</div> : task?.map((el,index) => {
                                  return <div className="my-3">
                                      <TaskCard task={el}  index={index}/>
                                  </div>
                              })
                          }
                      </div>
                      {provided.placeholder}
                  </div>
                  
            )}
       
        </Droppable>
  
           
            <NewTaskModul onDispatch={()=> getTasks(props._id, (tasks: TaskModul[]) => setTask(tasks))} isOpen={isNewTaskModalOpen} columnId={props._id}/>
        </>

    )
}