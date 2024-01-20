import React from "react";
import "../../../cssFiles/comon.css"
import { ChildProps } from "../../../utility/comonInterfaces";

export default function SginUp({onAction}:ChildProps): JSX.Element {
    function changeForm(value:boolean){
        onAction(value)
    }
    return (
        <div className="w-75 rounded" style={{color:"white"}}>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="frist name" />
                </div>
                <div className="form-group">
                    <label htmlFor="surname">surname</label>
                    <input type="text" className="form-control" id="surname" placeholder="surname" />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">username</label>
                    <input type="text" className="form-control" id="userName" placeholder="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="invitationCode">invitation code</label>
                    <input type="text" className="form-control" id="invitationCode" placeholder="code" />
                </div>
                <div className="form-group col-12">
                    <input className="btn my-btn col-12 mt-3 " type="button" value="Sign Up" />
                </div>            
            </form>
            <small className="">already a memebre?<span onClick={()=>changeForm(true)} style={{color:"#0000ff", cursor: "pointer"}} ><i>login</i></span></small>
        </div>
            

    )
}