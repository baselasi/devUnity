import React, { useState } from "react";
import SginIn from "./sginIn";
import SginUp from "./sginUp";
import { ChildProps } from "../../../utility/comonInterfaces";
interface ThisInterface extends ChildProps {
    type:boolean| null
}
export default function Form({type,onAction}:ThisInterface):JSX.Element {
    const [formType, setFromType] = useState<null|boolean>(null)
    function handelAction(value:boolean){
        onAction(value)
    }
    console.log(formType,type)
    if (type == true || formType) {
        return <SginIn onAction={handelAction}/>
    } else if(type == false || formType==false){
        return <SginUp onAction={handelAction}/>
    }
    else{
        return <div></div>
    }
}