import React, { useState } from "react";


import { Draggable } from 'react-beautiful-dnd';

import MyModal from "../../../../components/modalTemplate/Modal";

import { TaskModul } from "../../../../modules/taskModul";


interface Props {
    index: number,
    task: TaskModul
}


export default function TaskCard({ task, index }: { task: TaskModul, index: number }): JSX.Element {
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
                    <div className="border-white rounded-md border hover:bg-black hover:cursor-pointer p-2 active:shadow-md active:shadow-white "  >
                        <div className="grid grid-cols-4 mb-3">
                            <h4 className="col-4">{task.taskName}</h4>
                        </div>
                        <div>

                            {task.assignee?.map((user) => {
                                return <span className="rounded-full p-2 bg-blue-900 mx-1" >
                                    {user.sigla}
                                </span>
                            })}
                        </div>

                    </div>

                </div>
            )}

        </Draggable>
    )
}