import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";


export default function Dashboard():JSX.Element{
    const userInfo = useSelector((state:RootState) => state.user.userInfo);
    console.log(userInfo)
    return(
        <h1>DASCHBOARD</h1>
    )
}