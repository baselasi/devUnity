// import { configureStore } from '@reduxjs/toolkit';
// // import userProfileReducer from './reducers/userProfileReducer'; // Create this file to define your userProfileReducer

// const store = configureStore({
//   reducer: {
//     userProfile: userProfileReducer,
//   },
// });

// export default store;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface UserState {
    user: UserModel | null;
  }
  
  interface UserModel {
    id: string;
    username: string;
  }
  
  const initialState: UserState = {
    user: null,
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserModel | null>) => {
        state.user = action.payload;
      },
    },
  });
  
  export const { setUser } = userSlice.actions;
  export default userSlice.reducer;