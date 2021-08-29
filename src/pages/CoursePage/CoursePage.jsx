/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import './CoursePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { getCoursesThunk } from '../../redux/slices/courseSlice';
import CoursePageCard from '../../components/coursePageCard';

function createCard(data) {
  return (
    <CoursePageCard
      key={data.id}
      time={data.time}
      courseCode={data.courseCode}
      faculty={data.faculty}
      building={data.building}
    />
  );
}
const CoursePage = () => {
  const { courseCode } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  function getCourses(code) {
    dispatch(getCoursesThunk({ courseCode: code }));
  }
  useEffect(() => {
    if (courseCode) {
      getCourses(courseCode);
    }
  }, [dispatch]);

  return (
    <>
      <Row className="justify-content-center">
        <h1 className="mb-5">Courses</h1>
        {(courses.data)
          ? courses.data.classes.map(createCard)
          : <></>}
      </Row>
    </>
  );
};

export default CoursePage;
