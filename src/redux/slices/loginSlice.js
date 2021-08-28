/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, register } from '../../api/requests';

export const loginThunk = createAsyncThunk(
  'login/login',
  async (regNo) => {
    const response = await login(regNo);
    return response;
  },
);

export const registerThunk = createAsyncThunk(
  'login/register',
  async (payload) => {
    const response = await register(payload.regNo, payload.name);
    return response;
  },
);

const loginSlice = createSlice({
  name: 'login',

  initialState: {
    loginStatus: false,
    registerStatus: false,
  },

  reducers: {
  },
  extraReducers: {
    [loginThunk.fulfilled]: (state) => {
      state.loginStatus = true;
      return state;
    },
    [registerThunk.fulfilled]: (state) => {
      state.registerStatus = true;
      return state;
    },
  },
});

export default loginSlice.reducer;
