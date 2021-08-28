/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './timetableCard.scss';

const AlphabetCard = ({ alphabet, distros }) => (
  <Col lg={4} md={6} s={12} className="d-flex justify-content-center align-items-center">
    <Card
      className="card text-center alphabet-card"
    >
      <Card.Body className="alphabet-card-body">
        <Card.Title className="text-center card-title">
          <u>
            {alphabet}

          </u>
        </Card.Title>
        {distros.map((distro) => <div><Link className="distro-names" to={`/distro/${distro}`}>{distro}</Link></div>)}
      </Card.Body>
    </Card>
  </Col>
);

export default AlphabetCard;
