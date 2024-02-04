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
                <div className="grid grid-cols-12 app" style={{ backgroundColor: "#333333", fontWeight: "500", fontSize: "large" }}>
                        <div className="col-span-8 flex-col flex justify-center text-center bg-black" style={{ color: " white" }}>
                                <div className="flex justify-center">
                                        <img src="./imgs/logo.png" alt="" />
                                </div>
                                <div>
                                        <h1 style={{ fontFamily: "'Shrikhand'", color: "#0000ff" }}>Unifying Developers</h1>
                                        <p>Your central hub for seamless code collaboration, fostering real-time communication and unified project management.
                                                Elevate your team's efficiency and cohesion with <span style={{ fontFamily: "'Shrikhand'", color: "#0000ff" }}>DevUnity</span> </p>
                                </div>

                        </div>
                        <div className="col-span-4 ">
                                <div className="flex flex-col justify-center " style={{ height: "100vh" }}>
                                        {!isNullOrUndefined(action) ? <Form onAction={handelAction} type={action} /> : <ChooseAction onAction={handelAction} />}
                                </div>
                                {/* <div className="col-12">
                        <Footer/>
                        </div> */}
                        </div>

                </div>

        )
}