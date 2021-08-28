/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getTimetable from '../../api/requests';

export const fetchTimetable = createAsyncThunk(
  'timetable/fetchTimetable',
  async () => {
    const response = await getTimetable();
    console.log(response);
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
    addTimetable: (state, action) => {
      state.timetable = action.payload.timetable;
    },
  },
  extraReducers: {
    [fetchTimetable.fulfilled]: (state, action) => {
      console.log(state, action.payload);
      state.timetable = action.payload.data;

      return state;
    },
  },
});

export default timetableSlice.reducer;
