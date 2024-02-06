import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";

import Navbar from "./navbar/navbar";
import TaskTabel from "./taskTabel/tasksTabel";
import { ProjectModul } from "../../utility/projects";

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
interface projectsArray {
    projects: ProjectModul[]
}

export default function Dashboard(): JSX.Element {

    const [projects, setProjects] = useState<projectsArray>()

    // useEffect

    const userInfo = useSelector((state: RootState) => state.user.userInfo);
    console.log(userInfo)
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <TaskTabel />
            </QueryClientProvider>
        </>
    )
}