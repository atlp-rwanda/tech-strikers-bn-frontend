import React, { Component } from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  Button,
  Dropdown,
} from "react-bootstrap";
import imgs from "../assets/image/userAuthIcon.png";
import "bootstrap/dist/css/bootstrap.min.css";

class DashboardNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Barefoot Nomad</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              <img className="w-50" src={imgs} alt=" card" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default DashboardNavbar;
