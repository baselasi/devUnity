
import userReducer from '../storeSlices/userMoudleSlice';
import { combineReducers } from 'redux';
import projectReducer from "../storeSlices/projectSlice"

export interface RootState{
    user:ReturnType<typeof userReducer>;
    project:ReturnType<typeof projectReducer>
}

const rootReducer = combineReducers({
    user:userReducer,
    project:projectReducer
})

export default rootReducer