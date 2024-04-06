import React from "react";
import { useQuery } from "react-query";
import { useState } from "react";
import { ListItem } from "../../utility/comonInterfaces";

interface propsType {
    items: ListItem[],
    title?:string
    
}

export default function DropDown(props: propsType): JSX.Element {
    // const { data, isLoading, isError } = useQuery("fetch", getProjects)
    const [isHidden, setIsHideen] = useState(true)

    function showDropDown() {
        setIsHideen((prev) => !prev)
    }

    return (
        <>
            <div className="m-4 text-black">
                <div className="relative inline-block text-left">
                    <div>
                        <button type="button" onClick={showDropDown} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            {props.title}
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isHidden ? "hidden" : ""} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none shadow-blue-950`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                        <div className="py-1" role="none">
                            {props.items.length==0 ? "emty" : props.items.map((item)=>{
                                return <button onClick={() => {
                                    showDropDown()}} className="text-gray-700 rounded-lg  hover:bg-blue-600 block px-4 py-2 text-sm w-full" role="menuitem" id="menu-item-0">{item.value}</button>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}