import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../storeSlices/userMoudleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers as needed
  },
});

export default store;