import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { SignUpContext } from "../context/SignUpContext";

const SignUp = () => {
  const {
    user,
    orgHasUser,
    setFirstName,
    setLastName,
    setEmail,
    setOrganizationName,
    setPassword,
    setCPassword,
  } = useContext(SignUpContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName(e.target[0].value);
    setLastName(e.target[1].value);
    setEmail(e.target[2].value);
    setPassword(e.target[3].value);
    setOrganizationName(e.target[4].value);
    setCPassword(e.target[3].value);
  };

  if (user?.id) {
    return navigate("/signin");
  }

  return (
    <div className="signupDiv">
      <Form className="form" onSubmit={handleSubmit}>
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
                required
              />
            </Col>
            <Col md={6}>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                required
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
                required
              />
            </Col>
            <Col md={6}>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                required
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
                required
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col md={4}></Col>
            <Col md={8}>
              <Button className="btnSignUp" color="primary" type="submit">
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
