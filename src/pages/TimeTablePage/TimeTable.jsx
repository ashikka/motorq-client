import { React, useEffect } from 'react';
import './TimeTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimetable } from '../../redux/slices/timetableSlice';

const Timetable = () => {
  const dispatch = useDispatch();
  const timetable = useSelector((state) => state.timetable);
  console.log(timetable);
  useEffect(() => {
    dispatch(fetchTimetable());
  }, [dispatch]);

  return (
    <>
    </>
  );
};

export default Timetable;
