import React from "react";
// import { MultiSelect } from "react-multi-select-component";
// "react-multi-select-component": "^4.3.4",
import Select from 'react-select';

import { ListItem } from "../../utility/comonInterfaces";

interface PropsType {
    isMulti?: boolean
    listItem: ListItem[]|undefined,
    title?: string,
    width?: string,
    className?: string,
    placeHolder?: string,
    onSelectChange:(e:any)=>void
}


export default function MultipleSelect(props: PropsType): JSX.Element {
    return (
        <>
            <div>
                <Select
                    isMulti
                    name={props.title}
                    className={props.className}
                    classNamePrefix={props.placeHolder}
                    options={props.listItem}
                    onChange={(e)=>props.onSelectChange(e)}
                />
            </div>
        </>
    )
}