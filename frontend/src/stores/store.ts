import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../storeSlices/userMoudleSlice';
import projectReducer from "../storeSlices/projectSlice"
const store = configureStore({
  reducer: {
    user: userReducer,
    project:projectReducer
  },
});

export default store;