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
        <div className="col-6 align-items-center d-flex h-50 justify-content-between">
            <button className="btn my-btn col-5 rounded-5" onClick={()=>chooseForm(false)}>Sgin Up</button>
            <button className="btn  my-btn col-5 rounded-5" onClick={()=>chooseForm(true)}>login</button>
        </div>
    )
}