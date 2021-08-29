/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import './TimeTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
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
  const { rollNo } = useParams();
  const dispatch = useDispatch();
  const timetable = useSelector((state) => state.timetable);

  function getTimetable(regNo) {
    dispatch(fetchTimetable({ rollNo: regNo }));
  }
  useEffect(() => {
    if (rollNo) {
      getTimetable(rollNo);
    }
  }, [dispatch]);

  return (
    <>
      <Row className="justify-content-center">
        <h1 className="mb-5">Timetable</h1>
        {(timetable.timetable.classes)
          ? timetable.timetable.classes.map(createCard)
          : <></>}
      </Row>
    </>
  );
};

export default Timetable;
