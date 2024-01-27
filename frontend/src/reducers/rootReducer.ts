
import userReducer from '../storeSlices/userMoudleSlice';
import { combineReducers } from 'redux';


export interface RootState{
    user:ReturnType<typeof userReducer>;
}

const rootReducer = combineReducers({
    user:userReducer
})

export default rootReducer