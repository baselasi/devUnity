import React from "react";
import "../../../cssFiles/comon.css"
import { ChildProps } from "../../../utility/comonInterfaces";
// interface ChildProps {
//     // Define the type for the callback function to be passed to the parent
//     onAction: (value: boolean) => void;
// }

export default function ChooseAction({onAction}:ChildProps):JSX.Element{

    function chooseForm(value:boolean){
        onAction(value)
    }

    return(
        <div className="grid grid-cols-8 w-full">
            <button className="my-btn   col-start-2 col-end-4" onClick={()=>chooseForm(false)}>Sgin Up</button>
            <button className="  my-btn  col-start-6 col-span-2" onClick={()=>chooseForm(true)}>login</button>
        </div>
    )
}