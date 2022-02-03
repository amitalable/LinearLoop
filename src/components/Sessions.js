import React from "react";
import { Row, Col, Table, Button } from "reactstrap";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSessionList } from "../hooks/useSessionList";

const Sessions = () => {
  const { response } = useSessionList();
  return (
    <div className="sessions">
      <div className="title">
        <Row>
          <Col md={6}>Sessions</Col>
          <Col md={6} className="search-form">
            <Button color="primary">Sign Out all other Sessions</Button>
          </Col>
        </Row>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Locations</th>
            <th>Devices</th>
            <th>IP-Address</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IN</td>
            <td>Chrome - Windows</td>
            <td>2405:201:2000:f14d:6078:d902:5ec2:fdo4</td>
            <td>10 seconds ago</td>
            <td>
              <Button color="primary" className="btn-signOut">
                Sign Out
              </Button>
            </td>
          </tr>
          <tr>
            <td>IN</td>
            <td>Chrome - Windows</td>
            <td>2405:201:2000:f14d:6078:d902:5ec2:fdo4</td>
            <td>08 January</td>
            <td>
              <Button color="primary" className="btn-signOut">
                Sign Out
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="pagination">
        <span>1 - 10 from 16 results</span>
        <div className="right">
          <MdKeyboardArrowLeft className="arrow" color="primary" />
          <MdKeyboardArrowRight className="arrow" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Sessions;
