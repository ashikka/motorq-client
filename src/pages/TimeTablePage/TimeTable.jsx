import { React, useEffect } from 'react';
import './TimeTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { fetchTimetable } from '../../redux/slices/timetableSlice';
import TimetableCard from '../../components/timetableCard';

function createCard(data) {
  return (
    <TimetableCard
      key={data.id}
      time={data.time}
      courseCode={data.courseCode}
      faculty={data.faculty}
      building={data.building}
    />
  );
}
const Timetable = () => {
  const dispatch = useDispatch();
  const timetable = useSelector((state) => state.timetable);
  console.log(timetable);
  useEffect(() => {
    dispatch(fetchTimetable());
  }, [dispatch]);

  return (
    <>
      <Row>
        <h1>Timetable</h1>
        {timetable.map(createCard)}
      </Row>
    </>
  );
};

export default Timetable;
