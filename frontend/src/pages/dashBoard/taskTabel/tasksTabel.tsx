import React, { useEffect } from "react";
import SideBar from "./sideBar";
import { getData } from "../../../api/_baseApi";
import { useSelector } from "react-redux";
import rootReducer, { RootState } from "../../../reducers/rootReducer";


export default function TaskTabel():JSX.Element{
    useEffect((()=>{
        getProjects()
    }),[])
    
    const project = useSelector((state:RootState)=>state.project.projectInfo)
    async function getProjects(){
        let res = await getData({apiUrl:`/api/project`})
        console.log(res)
    }
    console.log(project)

    return(
        <>
            <div>
               
                <SideBar/>
            </div>
            <div>

            </div>
        </>
    )
}