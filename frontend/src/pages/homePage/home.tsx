import React, { useState } from "react";
import "../../App.css"
import { isNullOrUndefined } from "../../utility/comonFunction";
import ChooseAction from "./components/chooseAction";
import Form from "./components/from";

export default function HomePage(): JSX.Element {

        const [action, setAction] = useState<null | boolean>(null)

        function handelAction(action: boolean) {
                setAction(action)
        }

        return (
                <div className="d-flex app" style={{ backgroundColor: "#333333", fontWeight: "500", fontSize: "large" }}>
                        <div className="w-75 rounded-end-5 bg-black d-flex flex-column justify-content-center text-center" style={{ color: " white" }}>
                                <div className="rounded h-25 d-flex justify-content-center col-12">
                                        <img src="./imgs/logo.png" alt="" />
                                </div>
                                <div>
                                        <h1 style={{ fontFamily: "'Shrikhand'", color: "#0000ff" }}>Unifying Developers</h1>
                                        <p>Your central hub for seamless code collaboration, fostering real-time communication and unified project management.
                                                Elevate your team's efficiency and cohesion with <span style={{ fontFamily: "'Shrikhand'", color: "#0000ff" }}>DevUnity</span> </p>
                                </div>

                        </div>
                        <div className="w-50 ">
                                <div className="d-flex flex-wrap justify-content-center align-content-center" style={{ height: "100vh" }}>
                                        {!isNullOrUndefined(action) ? <Form onAction={handelAction} type={action} /> : <ChooseAction onAction={handelAction} />}
                                </div>
                                {/* <div className="col-12">
                        <Footer/>
                        </div> */}
                        </div>

                </div>

        )
}