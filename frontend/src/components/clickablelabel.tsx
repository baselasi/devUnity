import React from "react";
import "../cssFiles/comon.css"
import { myLabel } from "../utility/propsInterface/propsInterfaces";

export default function ClikableLabel(props:myLabel): JSX.Element {
    return (
        <div className="group">
            <div className="my-label my-btn">{props.labeTest} <span className="my-tooltip group-hover:inline-block">{props.tooltipsText}</span></div>
        </div>
    )
}