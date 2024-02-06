
import React from "react";
import { ColumnModul } from "../../../../utility/columnModul";


export default function ColumnTabel(props:ColumnModul): JSX.Element {
    return (
        <>
            <div className="flex h-lvh flex-col items-center justify-around">
                <h2>{props.columnName}</h2>
                <div className="h-4/5 w-96 overflow-y-hidden rounded p-2 mt-0 m-4 border-2 shadow-xl">
                </div>  
            </div>

        </>

    )
}