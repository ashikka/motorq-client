/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './timetableCard.scss';

const CoursePageCard = (props) => (
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
        <Button>Add</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default CoursePageCard;
