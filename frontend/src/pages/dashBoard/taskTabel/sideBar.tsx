import React, { useEffect, useState } from "react";
import { getData } from "../../../api/_baseApi";
import { ProjectModul } from "../../../utility/projects";
import ClikableLabel from "../../../components/clickablelabel";

interface projectsState {
    project:ProjectModul[]
}

export default function SideBar(): JSX.Element {

    const [projects, setProjects] = useState<ProjectModul[]>()
    useEffect((() => {
        getProjects()
    }), [])

    async function getProjects() {
        let res = await getData({ apiUrl: `/api/project` })
        // const projects =  res.data
        setProjects(res.data.data)
    }

    return (
        <div>
                <ClikableLabel/>
        
            {
                projects?.map((el)=>{
                    return <button>{el.projectName}</button>
                })}
        </div>
    )
}