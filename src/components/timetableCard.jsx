/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './timetableCard.scss';

const TimetableCard = (props) => (
  <Col lg={4} md={6} s={12} className="d-flex justify-content-center align-items-center">
    <Card
      className="card text-center alphabet-card"
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

      </Card.Body>
    </Card>
  </Col>
);

export default TimetableCard;
