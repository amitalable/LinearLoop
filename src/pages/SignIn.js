import React from "react";
import "../sass/_signIn.scss";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";

const SignIn = () => {
  return (
    <div className="signinDiv">
      <Form className="form">
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
              <Button className="btnLogIn" color="primary">
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
