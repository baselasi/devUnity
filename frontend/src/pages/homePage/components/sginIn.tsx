import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../../../cssFiles/comon.css"

import { ChildProps } from "../../../utility/comonInterfaces";
import { UserLogin } from "../../../utility/user";
import { User } from "../../../utility/comonInterfaces";
import { BaseResponse } from "../../../api/_baseApi";

//STORE REGION
import { setUser } from "../../../storeSlices/userMoudleSlice";
import { useDispatch } from "react-redux";

export default function SginIn({ onAction }: ChildProps) {
    const [myForm, setMyForm] = useState<UserLogin>({
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    const loginForm = useRef<HTMLFormElement>(null)
    const dispatch = useDispatch();

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
            const res = await response.json()
            if (res.sucess) {
                callbak(res)
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

    function handelResponse<T>(res: BaseResponse<T>) {
        localStorage.setItem("token", res.data.token)
        let user = new User()
        Object.keys(user).forEach((key) => {
            if (key in res.data.user) {
                user[key as keyof User] = res.data.user[key as keyof T];
            }
        });
        dispatch(setUser(user))
    }

    function hangeForm(value: boolean) {
        onAction(value)
    }

    return (
        <div className="w-3/4 rounded" >
            <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={loginForm}>
            <h2 style={{ fontFamily: "'Shrikhand'" ,color: "#0000ff"  }} className="text-center text-primary">WELCOME BACK</h2>

                <div className="mb-4 " >
                    <label htmlFor="floatingInput"  className="text-blue-500">Email address</label>
                    <input type="email" name="email" onChange={handelChange} className="my-input " id="floatingInput" placeholder="name@example.com" />
                </div>
                <div className="relative ">
                    <label htmlFor="exampleInputPassword1" className="text-blue-500">Password</label>
                    <input type="password" name="password" onChange={handelChange} className="my-input" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="grid grid-cols-12 py-4 ">
                    <input className=" my-btn col-start-4 col-end-10 mt-3" onClick={() => submitForm(myForm, handelResponse)} type="button" value="login" />
                </div>
            </form>
            <small style={{ color: "white" }}>not a memebre?<span onClick={() => hangeForm(false)} style={{ color: "#0000ff", cursor: "pointer",fontWeight:"900",fontSize:"medium" }} ><i>SignUp</i></span></small>
        </div>
    )
}