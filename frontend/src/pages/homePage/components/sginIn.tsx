import React, { useRef, useState } from "react";
import "../../../cssFiles/comon.css"
import { ChildProps } from "../../../utility/comonInterfaces";
import { UserLogin } from "../../../utility/user";
import { useNavigate } from 'react-router-dom';
export default function SginIn({ onAction }: ChildProps) {
    const navigate = useNavigate()

    const [myForm, setMyForm] = useState<UserLogin>({
        email: "",
        password: ""
    })

    const loginForm = useRef<HTMLFormElement>(null)

    function handelChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setMyForm((prevForm) => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    async function submitForm(form: UserLogin, callbak: (value: any) => void) {
        const formDataObject = createFormData(form)
        try {
            const response = await fetch("api/login", {
                method: "POST", headers: { "content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify(Object.fromEntries(formDataObject))
            })
            const data = await response.json()
            console.log(data)
            if (data.sucess) {
                callbak(data.token)
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error)  ////////TODO HANDEL ERROR
        }
    }

    function createFormData(form: UserLogin) {
        const formDataObject = new FormData()
        Object.entries(form).forEach(([key, value]) => {
            formDataObject.append(key, value)
        })
        return formDataObject
    }

    function setToken(token: string) {
        localStorage.setItem("token", token)
    }

    function hangeForm(value: boolean) {
        onAction(value)
    }

    return (
        <div className="w-75 rounded" >
            <h2 style={{ fontFamily: "'Shrikhand'" }} className="text-center text-primary">WELCOME BACK</h2>
            <form className="text-primary" ref={loginForm}>
                <div className="form-floating mb-3">
                    <input type="email" name="email" onChange={handelChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" onChange={handelChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <label htmlFor="exampleInputPassword1">Password</label>
                </div>
                <div className="form-group col-12">
                    <input className="btn my-btn col-12 mt-3" onClick={() => submitForm(myForm, setToken)} type="button" value="login" />
                </div>
            </form>
            <small style={{ color: "white" }}>not a memebre?<span onClick={() => hangeForm(false)} style={{ color: "#0000ff", cursor: "pointer" }} ><i>signup</i></span></small>
        </div>
    )
}