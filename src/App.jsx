import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';
import Timetable from './pages/TimeTablePage/TimeTable';
import LoginPage from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage/LandingPage';
import MapPage from './pages/MapPage/MapPage';

require('leaflet/dist/leaflet.css'); // inside .js file
require('react-leaflet-markercluster/dist/styles.min.css'); // inside .js file

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container fluid className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/register">
            <LoginPage />
          </Route>
          <Route exact path="/timetable">
            <Timetable />
          </Route>
          <Route exact path="/maps/:courseCode">
            <MapPage />
          </Route>
          <Route exact path="/courses">
            Add and drop
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
