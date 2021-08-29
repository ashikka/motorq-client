import { React } from 'react';
import './LandingPage.scss';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import timetable from '../../assets/timetable.jpg';
import map from '../../assets/map.jpg';
import courses from '../../assets/courses.jpg';

const LandingPage = () => (
  <>
    <Row className="my-5">
      <h1 className="my-5">Select your choice</h1>
      <Col>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={timetable} alt="timetable" />
          <Link to="/timetable/19BCE2022"><Button className="mx-3 mt-5" variant="outline-secondary">Timetable</Button></Link>
        </div>

      </Col>
      <Col>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={courses} alt="map" />
          <Link to="/courses/CSE1003"><Button className="mx-3 mt-5" variant="outline-secondary">Courses</Button></Link>
        </div>
      </Col>
      <Col>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={map} alt="courses" />
          <Link to="/maps/CSE1003"><Button className="mx-3 mt-5" variant="outline-secondary">Map</Button></Link>
        </div>
      </Col>
    </Row>
  </>
);

export default LandingPage;
