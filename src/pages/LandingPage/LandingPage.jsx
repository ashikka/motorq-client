import { React } from 'react';
import './LandingPage.scss';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import timetable from '../../assets/timetable.jpg';
import map from '../../assets/map.jpg';
import courses from '../../assets/courses.jpg';

const LandingPage = () => (
  <>
    <Row>
      <Col className="d-flex-column">
        <img src={timetable} alt="timetable" />
        <Link to="/timetable/19BCE2022"><Button className="mx-3 mt-5" variant="outline-secondary">Timetable</Button></Link>
      </Col>
      <Col>
        <img src={map} alt="map" />
        <Link to="/courses/CSE1003"><Button className="mx-3 mt-5" variant="outline-secondary">Courses</Button></Link>
      </Col>
      <Col>
        <img src={courses} alt="courses" />
        <Link to="/maps/CSE1003"><Button className="mx-3 mt-5" variant="outline-secondary">Map</Button></Link>
      </Col>
    </Row>
  </>
);

export default LandingPage;
