import React, { useState } from "react";
import { Tooltip } from 'react-tooltip'


import { Draggable } from 'react-beautiful-dnd';

import MyModal from "../../../../components/modalTemplate/Modal";

import { TaskModul } from "../../../../modules/taskModul";
import { createTaskBorderColor, createLabelsColors } from "../../../../utility/comonFunction";


interface Props {
    index: number,
    task: TaskModul
}


export default function TaskCard({ task, index }: { task: TaskModul, index: number }): JSX.Element {
    console.log(task)
    // console.log(createTaskBorderColor(5)[2])
    return (
        <Draggable draggableId={task._id} index={index} shouldRespectForcePress={true}>
            {(provided) => (
                <div
                    style={{
                        userSelect: 'none',
                        padding: 8,
                        margin: '0 0 8px 0',
                        backgroundColor: '#fff',
                        border: '1px solid #ddd', ...provided.draggableProps.style

                    }}
                    ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
                >
                    <div className={`border-${createTaskBorderColor(task.importance)}   rounded-md border-2 hover:bg-black hover:cursor-pointer p-2 active:shadow-md active:shadow-white `} >
                        <div className="grid grid-cols-4 mb-3">
                            <h4 className="col-span-3">{task.taskName?.toUpperCase()}</h4>
                        </div>
                        <div className="mb-5">
                            {task.assignee?.map((user, index) => {
                                return <span data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user.username}
                                    data-tooltip-place="top" key={index} className="rounded-full p-2 font-bold bg-blue-900 hover:mx-1" >
                                    {user.sigla}
                                    <Tooltip style={{backgroundColor:" rgb(23 37 84) ",fontSize:"small",font:"italic"}} id="my-tooltip" />

                                </span>
                            })}
                        </div>
                        <div className="mb-4" >
                            {task.labels?.map((label, index) => {
                                return <span key={index} className={`mx-0  rounded-full p-2 ${createLabelsColors(label.colore)[0]} font-bold ${createLabelsColors(label.colore)[1]}  hover:mx-1`} >
                                    {label.name.toUpperCase()}
                                </span>
                            })}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}