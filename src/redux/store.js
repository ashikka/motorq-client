import { configureStore } from '@reduxjs/toolkit';
import timetableReducer from './slices/timetableSlice';
import loginReducer from './slices/loginSlice';
import classSlice from './slices/classSlice';

export default configureStore({
  reducer: {
    timetable: timetableReducer,
    login: loginReducer,
    classes: classSlice,
  },
});
