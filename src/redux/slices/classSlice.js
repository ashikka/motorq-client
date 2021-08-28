/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClasses } from '../../api/requests';

export const getClassesThunk = createAsyncThunk(
  'classes/get',
  async (payload) => {
    const response = await getClasses(payload.courseCode);
    return response;
  },
);

const classSlice = createSlice({
  name: 'classes',

  initialState: {
    data: null,
  },
  reducers: {
  },
  extraReducers: {
    [getClassesThunk.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      return state;
    },
  },
});

export default classSlice.reducer;
