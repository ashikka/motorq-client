/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './timetableCard.scss';
import swal from 'sweetalert';
import { addCourse } from '../api/requests';

const CoursePageCard = (props) => {
  const course = {
    id: 'cid1',
    courseCode: 'CSE1002',
    courseName: 'Operating Systems',
    faculty: "Deepa Ma'am",
    building: 'SJT',
    time: 'Monday 5pm-7pm',
    location: {
      latitude: 70,
      longitude: 80,
    },
  };

  async function sendData() {
    const res = await addCourse(course, '19BCE2022');
    if (res.data.message === 'Classes are clashing') {
      swal('Classes are clashing');
    } else {
      swal('Classes added successfully');
    }
  }
  return (
    <Col lg={4} className="d-flex justify-content-center align-items-center">
      <Card
        className="card text-center course-card"
      >
        <Card.Body>
          <Card.Title className="text-center card-title">
            {props.courseCode}
          </Card.Title>
          <p>
            Time:
            {' '}
            {props.time}
          </p>
          <p>
            Faculty:
            {' '}
            {props.faculty}
          </p>
          {' '}
          <p>
            Building:
            {' '}
            {props.building}
          </p>
          <Button variant="outline-secondary" className="px-5" onClick={(e) => { e.preventDefault(); sendData(); }}>Add</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CoursePageCard;
