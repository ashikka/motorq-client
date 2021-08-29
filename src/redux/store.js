import { configureStore } from '@reduxjs/toolkit';
import timetableReducer from './slices/timetableSlice';
import loginReducer from './slices/loginSlice';
import classSlice from './slices/classSlice';
import courseSlice from './slices/courseSlice';

export default configureStore({
  reducer: {
    timetable: timetableReducer,
    login: loginReducer,
    classes: classSlice,
    courses: courseSlice,
  },
});
