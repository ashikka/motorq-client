/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { deleteCourse } from '../api/requests';
import './timetableCard.scss';

const TimetableCard = (props) => {
  async function sendData() {
    const res = await deleteCourse('19BCE2022', 'cid2');
  }
  return (
    <Col lg={4} className="d-flex justify-content-center align-items-cente">
      <Card
        className="card text-center alphabet-card"
      >
        <Card.Body>
          <Card.Title className="text-center card-title">
            {props.courseName}
            <p>
              {props.courseCode}

            </p>
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
          <Button variant="outline-secondary" className="px-5" onClick={(e) => { e.preventDefault(); sendData(); }}>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TimetableCard;
