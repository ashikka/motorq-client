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
      <Card.Body className="alphabet-card-body">
        <Card.Title className="text-center card-title">
          <u>
            {props.courseCode}

          </u>
        </Card.Title>
        {props.time}
        {props.faculty}
        {props.building}
      </Card.Body>
    </Card>
  </Col>
);

export default TimetableCard;
