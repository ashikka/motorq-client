import { configureStore } from '@reduxjs/toolkit';
import timetableReducer from './slices/timetableSlice';

export default configureStore({
  reducer: {
    timetable: timetableReducer,
  },
});
