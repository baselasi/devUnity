import React, { useEffect, useState } from "react";
import ClikableLabel from "../../../components/clickablelabel";
import { ProjectModul } from "../../../utility/projects";
import { getData } from "../../../api/_baseApi";
import { useQuery } from "react-query";
import "../../../cssFiles/comon.css"

// import { UseDispatch } from "react-redux";
import { setProject } from "../../../storeSlices/projectSlice";
import { useDispatch } from "react-redux";
interface Projects {
  project: ProjectModul[]
}

async function getProjects() {
  const res = await getData<ProjectModul[]>({ apiUrl: "/api/project" })
  return res.data
}

export default function Navbar(): JSX.Element {
  const [isHidden, setIsHideen] = useState(true)
  const { data, isLoading, isError } = useQuery("fetch", getProjects)
  const dispatch = useDispatch()

  function showDropDown() {
    setIsHideen((prev) => !prev)
  }

  function changeProject(project: ProjectModul) {
    dispatch(setProject(project))
  }

  return (
    <nav className=" bg-neutral-500 text-white flex justify-between items-center" style={{ height: "7vh" }}>
      <div className="flex justify-items-start items-center">
        <a> <img src="./imgs/android-icon-48x48.png" className="h-100" /></a>
        <ul>
          <li>
            <a className="" href="#">TASKS</a>
          </li>
          <li>
            <a>

            </a>
          </li>
          <li>
            <a>

            </a>
          </li>
        </ul>
      </div>
      <div className="m-4 text-black">
        <div className="relative inline-block text-left">
          <div>
            <button type="button" onClick={showDropDown} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
              {isError ? "please try again" : isLoading ? "WAITING..." : "PROJECTS"}
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div className={`${isHidden ? "hidden" : ""} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none shadow-blue-950`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
            <div className="py-1" role="none">
              {
                data?.map((el: ProjectModul) => {
                  return <button onClick={() => changeProject(el)} className="text-gray-700 rounded-lg  hover:bg-blue-600 block px-4 py-2 text-sm w-full" role="menuitem" id="menu-item-0">{el.projectName}</button>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}