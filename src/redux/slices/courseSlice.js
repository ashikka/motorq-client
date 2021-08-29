/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCourses } from '../../api/requests';

export const getCoursesThunk = createAsyncThunk(
  'courses/get',
  async (payload) => {
    const response = await getCourses(payload.courseCode);
    return response;
  },
);

const courseSlice = createSlice({
  name: 'courses',

  initialState: {
    data: null,
  },
  reducers: {
  },
  extraReducers: {
    [getCoursesThunk.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      return state;
    },
  },
});

export default courseSlice.reducer;
