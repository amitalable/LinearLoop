import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
const ChangePassword = () => {
  return (
    <div className="my-profile">
      <div className="title">Change Your Password</div>
      <Form>
        <FormGroup>
          <Row className="currentPassword">
            <Col md={12}>
              <Label for="currentPassword">Current Password</Label>
            </Col>
            <Col md={12}>
              <Input
                type="password"
                id="currentPassword"
                placeholder="Password"
                name="currentPassword"
              />
            </Col>
          </Row>
          <Row className="newPassword mt-3">
            <Col md={12}>
              <Label for="newPassword">New Password</Label>
            </Col>
            <Col md={12}>
              <Input
                type="password"
                id="newPassword"
                placeholder="New Password"
                name="newPassword"
              />
            </Col>
          </Row>
          <Row className="confirmNewPassword mt-3">
            <Col md={12}>
              <Label for="confirmNewPassword">Confirm New Password</Label>
            </Col>
            <Col md={12}>
              <Input
                type="password"
                id="confirmNewPassword"
                placeholder="Confirm New Password"
                name="confirmNewPassword"
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

export default ChangePassword;
