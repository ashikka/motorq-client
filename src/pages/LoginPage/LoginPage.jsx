import { React, useState } from 'react';
import './LoginPage.scss';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { loginThunk, registerThunk } from '../../redux/slices/loginSlice';

const LoginPage = () => {
  const [loginRegNo, setLoginRegNo] = useState('');
  const [registerRegNo, setRegisterRegNo] = useState('');
  const [registerName, setRegisterName] = useState('');
  const loginStatus = useSelector((state) => state.login.loginStatus);
  const registerStatus = useSelector((state) => state.login.registerStatus);
  const dispatch = useDispatch();

  function doLogin(regNo) {
    dispatch(loginThunk(regNo));
    return false;
  }

  function doRegister(regNo, name) {
    dispatch(registerThunk({
      regNo, name,
    }));
    return false;
  }

  if (registerStatus || loginStatus) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <Row className="h-100 justify-content-center align-items-center">
      <Col sm={5} className="form-container p-5 mx-5">
        <h1>Login</h1>
        <Form className="mt-5 px-5">
          <Form.Group className="mb-3" controlId="formBasicRegNo">
            <Form.Label>Reg No</Form.Label>
            <Form.Control type="text" placeholder="Enter Reg No" value={loginRegNo} onChange={(e) => setLoginRegNo(e.target.value)} />
          </Form.Group>
          <Button variant="outline-secondary" onClick={(e) => { e.preventDefault(); doLogin(loginRegNo); }} className="mt-5" type="submit">
            Login
          </Button>
        </Form>
      </Col>
      <Col sm={5} className="form-container p-5">
        <h1>Register</h1>
        <Form className="mt-5 px-5">
          <Form.Group className="mb-3" controlId="formBasicRegNo" value={registerRegNo} onChange={(e) => setRegisterRegNo(e.target.value)}>
            <Form.Label>Reg No</Form.Label>
            <Form.Control type="text" placeholder="Enter Reg No" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
          </Form.Group>
          <Button variant="outline-secondary" onClick={(e) => { e.preventDefault(); doRegister(registerRegNo, registerName); }} className="mt-5" type="submit">
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
