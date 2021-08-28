import { React } from 'react';
import './LandingPage.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <>
    <Link to="/timetable"><Button className="mx-3 mt-5" variant="primary">Timetable</Button></Link>
    <Link to="/courses"><Button className="mx-3 mt-5" variant="primary">Courses</Button></Link>
    <Link to="/maps"><Button className="mx-3 mt-5" variant="primary">Map</Button></Link>
  </>
);

export default LandingPage;
