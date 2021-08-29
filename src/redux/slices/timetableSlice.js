/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTimetable } from '../../api/requests';

export const fetchTimetable = createAsyncThunk(
  'timetable/fetchTimetable',
  async (payload) => {
    const response = await getTimetable(payload.rollNo);
    return response;
  },
);

const timetableSlice = createSlice({
  name: 'timetable',

  initialState: {
    status: 'success',
    timetable: [],
  },

  reducers: {
  },
  extraReducers: {
    [fetchTimetable.fulfilled]: (state, action) => {
      state.timetable = action.payload.data;

      return state;
    },
  },
});

export default timetableSlice.reducer;
