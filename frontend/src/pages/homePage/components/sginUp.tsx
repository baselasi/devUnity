import React, { useRef, useState } from "react";
import "../../../cssFiles/comon.css"
import { ChildProps } from "../../../utility/comonInterfaces";

import { NewUserModule } from "../../../utility/user";

export default function SginUp({ onAction }: ChildProps): JSX.Element {

    const [myForm, setMyForm] = useState<NewUserModule>({
        firstName: "",
        email: "",
        lastName: "",
        username: "",
        password: "",
        invitationCode: ""
    })


    const regitrationForm = useRef<HTMLFormElement>(null)

    function handelChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setMyForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }))
    }
    function changeForm(value: boolean) {
        onAction(value)
    }

    async function submitForm(form: NewUserModule) {
        const formDataObject = createFormData(form)
        const response = await fetch("api/singUp", {
            method: "POST", headers: { "content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(Object.fromEntries(formDataObject))
        })
        const respone1 = await response.json()
    }


    function createFormData(form: NewUserModule) {
        const formDataObject = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            formDataObject.append(key, value);
        });
        return formDataObject
    }

    return (
        <div className="w-3/4 rounded" >
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={regitrationForm}>
                <h2 style={{ fontFamily: "'Shrikhand'", color: "#0000ff" }} className="text-center text-primary">GET STARTED</h2>
                <div className=" ">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="my-input" id="firstName" onChange={handelChange} placeholder="frist name" />
                </div>
                <div className="">
                    <label htmlFor="surname">surname</label>
                    <input type="text" name="lastName" className="my-input" id="surname" onChange={handelChange} placeholder="surname" />
                </div>
                <div className="">
                    <label htmlFor="userName">username</label>
                    <input type="text" name="username" className="my-input" id="userName" onChange={handelChange} placeholder="username" />
                </div>
                <div className="">
                    <label htmlFor="floatingInput">Email address</label>
                    <input type="email" name="email" className="my-input" id="floatingInput" onChange={handelChange} placeholder="name@example.com" />
                </div>
                <div className="">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="my-input" id="exampleInputPassword1" onChange={handelChange} placeholder="Password" />
                </div>
                <div className=" ">
                    <label htmlFor="invitationCode">invitation code</label>
                    <input type="text" name="invitationCode" className="my-input" id="invitationCode" onChange={handelChange} placeholder="code" />
                </div>
                <div className="grid grid-cols-12">
                    <input className="col-start-4 col-end-10 my-btn mt-3 " type="button" onClick={() => submitForm(myForm)} value="Sign Up" />
                </div>
            </form>
            <small style={{ color: "white" }}>already a memebre?<span onClick={() => changeForm(true)} style={{ color: "#0000ff", cursor: "pointer",fontWeight:"900",fontSize:"medium" }} ><i>login</i></span></small>
        </div>
    )
}