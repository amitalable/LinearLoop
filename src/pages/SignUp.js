import React from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";

const SignUp = () => {
  return (
    <div className="signupDiv">
      <Form className="form">
        <h4 className="formTitle">LOGO</h4>
        <FormGroup>
          <Row>
            <Col md={6}>
              <Label for="firstName">First Name</Label>
            </Col>
            <Col md={6}>
              <Label for="lastName">Last Name</Label>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name"
                name="firstName"
              />
            </Col>
            <Col md={6}>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                name="lastName"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={6}>
              <Label for="emailAddress">Email Address</Label>
            </Col>
            <Col md={6}>
              <Label for="password">Password</Label>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Input
                type="email"
                id="emailAddress"
                placeholder="xyz@gmail.com"
                name="emailAddress"
              />
            </Col>
            <Col md={6}>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col md={12}>
              <Label for="company">Company / Organization</Label>
              <Input
                type="text"
                id="company"
                placeholder="Company / Organization"
                name="company"
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col md={4}></Col>
            <Col md={8}>
              <Button className="btnSignUp" color="primary">
                Sign Up
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="disclaimer">
              Already have an Account? Login
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignUp;
