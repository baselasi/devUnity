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

    async function submitForm(form:NewUserModule){
        const formDataObject = createFormData(form)
        const response =await fetch("api/singUp", {
            method : "POST",headers:{"content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify(Object.fromEntries(formDataObject))
        })
        const respone1 = await response.json()
        console.log(response)
        console.log(respone1)
    }


    function createFormData(form: NewUserModule) {
        const formDataObject = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            formDataObject.append(key, value);
        });
        return formDataObject
    }
    // async function postUser(form: HTMLFormElement | undefined) {
    //     console.log(regitrationForm)
    //     new FormData(form).entries()
    // }
    /*let myForm = new FormData(regitratiForm).entries()
  const response = fetch("http://corsoreindal.somee.com/api/palestra", {
      method : "POST",headers:{"content-type":"application/json;charset=UTF-8"},
      body:JSON.stringify(Object.fromEntries(myForm))
  })*/
    return (
        <div className="w-75 rounded" >
            <h2 style={{ fontFamily: "'Shrikhand'", color: "#0000ff" }} className="text-center text-primary">GET STARTED</h2>
            <form className="text-primary" ref={regitrationForm}>
                <div className="form-floating mb-3 ">
                    <input type="text" name="firstName" className="form-control" id="firstName" onChange={handelChange} placeholder="frist name" />

                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="lastName" className="form-control" id="surname" onChange={handelChange} placeholder="surname" />

                    <label htmlFor="surname">surname</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="username" className="form-control" id="userName" onChange={handelChange} placeholder="username" />

                    <label htmlFor="userName">username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" id="floatingInput" onChange={handelChange} placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handelChange} placeholder="Password" />

                    <label htmlFor="exampleInputPassword1">Password</label>
                </div>
                <div className="form-floating ">
                    <input type="text" name="invitationCode" className="form-control" id="invitationCode" onChange={handelChange} placeholder="code" />

                    <label htmlFor="invitationCode">invitation code</label>
                </div>
                <div className="form-group col-12">
                    <input className="btn my-btn col-12 mt-3 " type="button" onClick={() => submitForm(myForm)} value="Sign Up" />
                </div>
            </form>
            <small style={{ color: "white" }}>already a memebre?<span onClick={() => changeForm(true)} style={{ color: "#0000ff", cursor: "pointer" }} ><i>login</i></span></small>
        </div>


    )
}