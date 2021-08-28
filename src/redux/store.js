import { configureStore } from '@reduxjs/toolkit';
import timetableReducer from './slices/timetableSlice';
import loginReducer from './slices/loginSlice';

export default configureStore({
  reducer: {
    timetable: timetableReducer,
    login: loginReducer,
  },
});
