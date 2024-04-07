
import React, { ReactNode } from "react"

interface modalProps {
    width: string,
    title: string,
    onClose: () => void,
    children: ReactNode,
    isOpen: boolean,
}

export default function MyModal(props: modalProps) {
    if (!props.isOpen) {
        return null
    } else {
        return (
            <>
                <div  tabIndex={-1}  className="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className={ `relative  p-4 ${props.width} ` }>
                        <div className="relative text-white bg-black text-white\ rounded-lg  dark:bg-gray-700 border-2 shadow-md border-white ">
                            <div className="flex items-center justify-between p-4 md:p-5  rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold  ">
                                    {props.title}
                                </h3>
                                <button type="button" className="end-2.5  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={props.onClose}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
