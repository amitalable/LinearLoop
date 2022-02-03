import React from "react";
import { Input, Row, Col, Table, Button } from "reactstrap";
import { FiEyeOff, FiEye, FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useGetCredentials } from "../hooks/useGetCredentials";

const Credentials = () => {
  const { credentialList, count, total } = useGetCredentials();
  return (
    <div className="credentials">
      <div className="title">
        <Row>
          <Col md={6}>Marketo Auth Credentials</Col>
          <Col md={6} className="search-form">
            <Input
              type="text"
              placeholder="Search"
              id="search"
              name="search"
              className="search"
            />
            <Button color="primary">+ Add New</Button>
          </Col>
        </Row>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Client ID</th>
            <th>Client Secret</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joe Johnson</td>
            <td>J 1.10.32</td>
            <td>J****2**********</td>
            <td>
              <FiEyeOff />
              <FiEdit3 />
              <RiDeleteBinLine />
            </td>
          </tr>
          <tr>
            <td>Joe Johnson</td>
            <td>J 1.10.32</td>
            <td>J****2**********</td>
            <td>
              <FiEye />
              <FiEdit3 />
              <RiDeleteBinLine />
            </td>
          </tr>
          {credentialList.map((cred) => (
            <tr>
              <td>{cred.name}</td>
              <td>{cred.clientId}</td>
              <td>{cred.clientSecret}</td>
              <td>
                <FiEye />
                <FiEdit3 />
                <RiDeleteBinLine />
              </td>
            </tr>
          ))}
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

export default Credentials;
