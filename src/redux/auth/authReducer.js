import {createSlice} from '@reduxjs/toolkit';

const state = {
  userId: null,
  name: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    updateUserInfo: (state, {payload}) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
    }),
    authStateChahge: (state, {payload}) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
  },
});
