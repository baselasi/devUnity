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
        let res = await getData({ apiUrl: `/api/project` },{projectId:""})
        // const projects =  res.data
        setProjects(res.data.data)
    }

    return (
        <div>
            {projects?.map((el)=>{
                    return <ClikableLabel {...{labeTest:el.projectName,tooltipsText:el.description}}/>
                })}
        </div>
    )
}