//react
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { QueryClient, QueryClientProvider } from 'react-query';
//components
import Navbar from "./navbar/navbar";
import TaskTabel from "./taskTabel/tasksTabel";
import { ProjectModul } from "../../utility/projects";


const queryClient = new QueryClient();
interface projectsArray {
    projects: ProjectModul[]
}

export default function Dashboard(): JSX.Element {

    const [projects, setProjects] = useState<projectsArray>()

    // useEffect

    const userInfo = useSelector((state: RootState) => state.user.userInfo);
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="h-lvh">
                    <Navbar />
                    <TaskTabel />
                </div>
            </QueryClientProvider>
        </>
    )
}