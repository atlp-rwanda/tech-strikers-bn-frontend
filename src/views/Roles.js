import React, { Component } from "react";
import edit from "../assets/image/edit.png";
import { Table, Button, Form, Modal, Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
class roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show1: false,
      roles: [],
      role: [],
      roleone: [],
      roleName: "",
      roledesc: "",
      searchTerm: "",
      setSearchTerm: "",
    };
  }
  onFilteredChangeCustom = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  handledelete = (e) => {
    e.preventDefault();
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    const id = document.getElementById("roleid1").value;
    axios({
      method: "delete",
      url: process.env.URL_delete_role + id,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
  handlecreate = (e) => {
    e.preventDefault();
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    const name = document.getElementById("roleName").value;
    const description = document.getElementById("roledesc").value;
    const data = { name, description };
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .post(
        process.env.URL_createRole,
        data,

        {
          headers: headers,
        }
      )
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEdit = () => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";

    const id = document.getElementById("roleid1").value;
    const name = document.getElementById("roleName1").value;
    const description = document.getElementById("roledesc1").value;
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    const data = { name, description };
    console.log(data);
    console.log(process.env.URL_update + id);
    axios
      .patch(process.env.URL_update + id, data, {
        headers: headers,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
  handleCellClick = (e) => {
    e.preventDefault();
    this.setState({ show1: true });
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";

    const value = e.target.textContent;
    axios({
      method: "GET",
      url: process.env.URL_getRoleByName + value,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      document.getElementById("roleName1").value = res.data.roleName.name;
      document.getElementById("roledesc1").value =
        res.data.roleName.description;
      this.setState({ role: res.data.roleName });
    });
  };
  generateRolesTable = () => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    axios({
      method: "GET",
      url: process.env.URL_roles,
      headers: {
        Authorization: token,
      },
    }).then((role) => {
      this.setState({ roles: role.data.roles });
    });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
    this.setState({ show1: false });
  };
  componentDidMount() {
    this.generateRolesTable();
  }
  render() {
    const { show,show1,roles,role,roleName,searchTerm,roledesc,setSearchTerm } = this.state;
      return (
      <>
        <div>
          <Navbar bg="light" variant="light">
            <Nav className="ml-auto">
              <Button
                className="login-submit"
                variant="primary"
                size="lg"
                onClick={this.handleShow}
              >
                Creae new role
              </Button>
              <Modal
                show={show}
                className="modal"
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton />

                <Modal.Body>
                  <Form onSubmit={this.handlecreate}>
                    <Form.Group>
                      <Form.Label>Role Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="roleName"
                        name="roleName"
                        value={roleName}
                        onChange={this.handlechange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        id="roledesc"
                        name="roledesc"
                        value={roledesc}
                        onChange={this.handlechange}
                      />
                    </Form.Group>
                    <div inline>
                      <Button
                        className="login-submit"
                        variant="primary"
                        size="lg"
                        type="submit"
                      >
                        Create
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </Nav>
          </Navbar>
        </div>
        <div className="mb-2" style={{ padding: "20px 5px 20px 5%" }}>
          <Modal
            show={show1}
            className="modal"
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton />

            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Control type="hidden" id="roleid1" value={role.id} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Role Name</Form.Label>
                  <Form.Control type="text" id="roleName1" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" id="roledesc1" />
                </Form.Group>
                <div inline>
                  <Button
                    className="role-button"
                    variant="primary"
                    size="lg"
                    onClick={this.handleEdit}
                  >
                    Edit
                  </Button>
                  <Button
                    className="role-button"
                    variant="danger"
                    size="lg"
                    onClick={this.handledelete}
                  >
                    Delete
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
          <Form inline>
            <Form.Control
              className="mr-sm-2"
              type="text"
              placeholder="Search by name or description"
              onChange={this.onFilteredChangeCustom}
            />
          </Form>
          <Table striped bordered hover size="sm" id="users">
            <thead>
              <tr onClick={this.handleShow}>
                <th>#</th>
                <th>
                  Roles Name{" "}
                  {<img src={edit} width="15px" height="15px" alt="edit" />}
                </th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {roles
                .filter((val) => {
                  console.log(val);
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    searchTerm !== "" &&
                    (val.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                      val.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()))
                  ) {
                    return val;
                  }
                })
                .map((role, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td onClick={this.handleCellClick}>{role.name}</td>
                      <td>{role.description}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
export default roles;
