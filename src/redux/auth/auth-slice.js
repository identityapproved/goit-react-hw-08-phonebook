import { createSlice } from '@reduxjs/toolkit';
import { registration, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // [fetchCurrentUser.fulfilled](state, { payload }) {
    //   state.isCurrent = true;
    // },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isCurrent = true;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isCurrent = false;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
