import React, { useState } from "react";

import MyModal from "../../../../components/modalTemplate/Modal";

import { TaskModul } from "../../../../modules/taskModul";



export default function TaskCard(prop: TaskModul): JSX.Element {
    function test() {
        console.log("close")
    }
    return (
        <>
            <div className="">
                <h4>{prop.taskName}</h4>
                {
                    prop.labels?.map((label) => {
                        return <div>{label.name}</div>
                    })
                }
            </div>
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