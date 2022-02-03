import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useChangePassword } from "../hooks/useChangePassword";
const ChangePassword = () => {
  const change = useChangePassword;

  const handleSubmit = (e) => {
    const data = {
      oldPassword: e.target[0].value,
      newPassword: e.target[1].value,
      confirmPassword: e.target[2].value,
    };
    const { success } = change({ ...data });
    alert(success);
  };
  return (
    <div className="my-profile">
      <div className="title">Change Your Password</div>
      <Form onSubmit={handleSubmit}>
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
                required
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
                required
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
                required
              />
            </Col>
          </Row>
        </FormGroup>
        <br />
        <FormGroup>
          <Button className="btn-save" color="primary" type="submit">
            Save
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ChangePassword;
