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
            <Draggable draggableId={task._id} index={index} shouldRespectForcePress={false }>
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
                        <div className="border-white rounded-md border-2 hover:bg-black hover:cursor-pointer p-2" >
                            <h4>{task.taskName}</h4>
                            {
                                task.labels?.map((label: any) => {
                                    return <div>{label.name}</div>
                                })
                            }
                        </div>
                    </div>
                )}

            </Draggable>
    )
}