import React, { useState } from "react";

import { Draggable } from 'react-beautiful-dnd';

import MyModal from "../../../../components/modalTemplate/Modal";

import { TaskModul } from "../../../../modules/taskModul";


interface Props {
    index: number,
    task: TaskModul
}


export default function TaskCard<Props>({ task, index }: { task: TaskModul, index: number }): JSX.Element {
    function test() {
        console.log("close")
    }
    return (
        <>
            <Draggable draggableId={task._id} index={index}>
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
                            {/* <div 
                        style={{
                            userSelect: 'none',
                            padding: 8,
                            margin: '0 0 8px 0',
                            backgroundColor: '#fff',
                            border: '1px solid #ddd', ...provided.draggableProps.style
                        }}
                        ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}> */}
                            <h4>{task.taskName}</h4>
                            {
                                task.labels?.map((label: any) => {
                                    return <div>{label.name}</div>
                                })
                            }
                        </div>
                    </div>

                    // </div>

                )}

            </Draggable>
            {/* <MyModal width="w-3/6" isOpen={true} onClose={test} title="Create New Task">
                <div className=" bg-white shadow-md rounded  pt-6 pb-8 mb-4" >
                    <form className="px-20 border-b pb-3" >
                        <div className="mb-4 " >
                            <input type="email" name="email" className="my-input " id="floatingInput" placeholder="task tilte*" />
                        </div>
                        <div className="relative ">
                            <input type="password" name="password" className="my-input" id="exampleInputPassword1" placeholder="task importance*" />
                        </div>
                        
                    </form>
                    <div className="flex justify-end">
                        <input className=" cancel-btn  p-1 px-1 w-1/6 mx-3 mt-3" type="button" value="cancel" />
                        <input className=" my-btn  mx-3 p-1 w-1/6 px-1   mt-3" type="button" value="save" />
                    </div>
                </div>


            </MyModal> */}
        </>
    )
}