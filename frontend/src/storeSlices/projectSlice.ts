import { ProjectModul } from "../utility/projects"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

 interface ProjectState{
    projectInfo:ProjectModul | null
}

const initialState: ProjectState={
    projectInfo : null
}


const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{
        setProject:(state,action:PayloadAction<ProjectModul|null>)=>{
            state.projectInfo = action.payload
        }
    }
    
})

export const  {setProject} = projectSlice.actions
export default projectSlice.reducer