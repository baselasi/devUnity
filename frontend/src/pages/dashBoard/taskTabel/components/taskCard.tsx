import React from "react";


import { TaskModul } from "../../../../modules/taskModul";



export default function TaskCard(prop:TaskModul):JSX.Element{
    return(
        <>
            <div>
                <h4>{prop.taskName}</h4>
                {
                    prop.labels.map((label)=>{
                        return <div>{label.name}</div>
                    })
                }
            </div>
        </>
    )
}