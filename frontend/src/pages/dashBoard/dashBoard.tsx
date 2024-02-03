import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";

import Navbar from "./navbar/navbar";
import TaskTabel from "./taskTabel/tasksTabel";


export default function Dashboard():JSX.Element{
    const userInfo = useSelector((state:RootState) => state.user.userInfo);
    console.log(userInfo)
    return(
        <>
            <Navbar/>
            <TaskTabel/>
        </>
    )
}