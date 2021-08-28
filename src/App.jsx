import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container fluid className="App">
        <Switch>
          <Route exact path="/">
            Landing Page
          </Route>
          <Route exact path="/timetable">
            Timetable
          </Route>
          <Route exact path="/maps">
            Maps
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
