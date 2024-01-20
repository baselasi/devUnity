import React from "react";
import "../../../cssFiles/comon.css"
import { ChildProps } from "../../../utility/comonInterfaces";

export default function SginIn({onAction}:ChildProps) {
    function hangeForm(value:boolean){
        onAction(value)
    }
    return (
        <div className="w-75 rounded" style={{color:"white"}}>
        <form >
                <div className="form-group p-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group p-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group p-2">
                    <label htmlFor="exampleCheck1">Your invitation code</label>
                    <input type="text" className="form-control" id="exampleCheck1" placeholder="Code" />
                </div>
                <div className="form-group p-2 col-12">
                    <input className="btn my-btn col-12 mt-3 " type="button" value="login" />
                </div>
            </form>
            <small className="p-2 ">not a memebre?<span onClick={()=>hangeForm(false)} style={{color:"#0000ff", cursor: "pointer"}} ><i>signup</i></span></small>
        </div>
          

    )
}