import { React, useEffect } from 'react';
import './TimeTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimetable } from '../../redux/slices/timetableSlice';
import TimetableCard from '../../components/timetableCard';


function createCard(data){
    const domainStatus = useSelector((state) => state.timetable);
    return(
        <TimetableCard key={data.id}  / >
    )
}
const Timetable = () => {
  const dispatch = useDispatch();
  const timetable = useSelector((state) => state.timetable);
  console.log(timetable);
  useEffect(() => {
    dispatch(fetchTimetable());
  }, [dispatch]);

  return (
    
  );
};

export default Timetable;
