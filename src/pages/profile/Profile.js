import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { CgMenuGridO } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import useFirebase from "../../firebase/useFirebase";

const Profile = () => {
  const { logOut, currentUser } = useFirebase();

  return (
    <div className="w-9/12 mx-auto mt-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="border font-bold rounded my-3 cursor-pointer text-center">
                <Nav.Link eventKey="dashboard">
                  <span className="flex justify-center items-center">
                    <CgMenuGridO className="text-2xl mr-3" />
                    <span> Dashboard</span>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="border font-bold rounded my-3 cursor-pointer text-center">
                <Nav.Link eventKey="profile">
                  <span className="flex justify-center items-center">
                    <CgProfile className="text-2xl mr-3" />
                    <span> Profile</span>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="border  font-bold rounded my-3 cursor-pointer text-center">
                <Nav.Link eventKey="orders">
                  <span className="flex justify-center items-center">
                    <BsCart className="text-2xl mr-3" />
                    <span> Orders</span>
                  </span>
                </Nav.Link>
              </Nav.Item>

              <button
                onClick={logOut}
                className="border flex align-center justify-center w-100 p-2 bg-green-400 text-gray-100 rounded mt-4 outline-none"
              >
                <FiLogOut className="text-2xl mr-3" /> <span> Logout</span>
              </button>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <div className="p-5">
                  <h1>Hello, {currentUser?.displayName}!</h1>
                  <p className="text-sm mt-4 ">
                    From your account dashboard. you can easily check & view
                    your recent orders, manage your shipping and billing
                    addresses and edit your password and account details.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h2>Hello</h2>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Profile;
