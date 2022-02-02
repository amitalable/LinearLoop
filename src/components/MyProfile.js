import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const MyProfile = () => {
  return (
    <div className="my-profile">
      <div className="title">Enter Your Profile Details</div>
      <Form className="">
        <FormGroup>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <Label for="firstName">First Name</Label>
                </Col>
                <Col md={12}>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    name="firstName"
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <Label for="lastName">Last Name</Label>
                </Col>
                <Col md={12}>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="emailGroup">
            <Col md={12}>
              <Label for="email">Email</Label>
            </Col>
            <Col md={12}>
              <Input
                type="email"
                id="email"
                placeholder="xyz@gmail.com"
                name="email"
              />
            </Col>
          </Row>
        </FormGroup>
        <br />
        <FormGroup>
          <Button className="btn-save" color="primary">
            Save
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default MyProfile;
