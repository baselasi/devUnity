import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../utility/comonInterfaces';

interface UserState {
    userInfo: User | null;
  }
  
  // interface UserModel {
  //   id: string;
  //   username: string;
  // }
  
  const initialState: UserState = {
    userInfo: null,
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<User | null>) => {
        state.userInfo= action.payload;
      },
    },
  });
  
  export const { setUser } = userSlice.actions;
  export default userSlice.reducer;