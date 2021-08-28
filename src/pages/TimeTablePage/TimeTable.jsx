import { React, useEffect } from 'react';
import './TimeTable.scss';
import { useSelector, useDispatch } from 'redux';
import { fetchTimetable } from '../../redux/slices/timetableSlice';

const Timetable = () => {
  const dispatch = useDispatch();
  const timetable = useSelector((state) => state.timetable);
  console.log(timetable);
  useEffect(() => {
    dispatch(fetchTimetable()); 
  }, [dispatch]);

  return (
    <h1>Hello</h1>
  );
};

export default Timetable;
