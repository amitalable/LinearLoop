import React, { useContext } from "react";
import "../sass/_signIn.scss";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { SignInContext } from "../context/SignInContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { token, setEmail, setPassword } = useContext(SignInContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target[0].value);
    setPassword(e.target[1].value);
  };

  if (token) {
    return navigate("/dashboard");
  }

  return (
    <div className="signinDiv">
      <Form className="form" onSubmit={handleSubmit}>
        <h4 className="formTitle">LOGO</h4>
        <FormGroup>
          <Row>
            <Col md={12}>
              <Label for="firstName">Enter email address</Label>
            </Col>
            <Col md={12}>
              <Input
                type="email"
                id="emailAddress"
                placeholder="xyz@gmail.com"
                name="emailAddress"
                required
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={12}>
              <Label for="password">Enter Password</Label>
            </Col>
            <Col md={12}>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                required
              />
            </Col>
            <Col md={12} className="underline">
              Forgot Password?
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={4}></Col>
            <Col md={7}>
              <Button className="btnLogIn" color="primary" type="submit">
                Log In
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="disclaimer">
              Don't have an Account? <span className="underline">Sign Up</span>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignIn;
