import React, { Component } from "react";
import edit from "../assets/image/edit.png";
import { Form, Button, Table, Modal, Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      users: [],
      editMode: false,
      user: [],
      userRole: [],
      roleName: [],
      redirect: false,
      searchTerm: "",
      setSearchTerm: "",
    };
  }

  onFilteredChangeCustom = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  handleCellClick = (event) => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    const tokenn =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    this.setState({ show: true });
    const value = event.target.textContent;
    axios({
      Method: "GET",
      url: process.env.URL_userbyinput + value,
      headers: {
        Authorization: tokenn,
      },
    })
      .then((response) => {
        this.setState({ user: response.data.data });
        this.setState({ userRole: response.data.data.role });
      })
      .catch((err) => console.log(err));
    axios({
      Method: "GET",
      url: process.env.URL_roles,
      headers: {
        Authorization: tokenn,
      },
    })
      .then((response) => {
        this.setState({ roleName: response.data.roles });
      })
      .catch((err) => console.log(err));
  };
  handleAssign = (event) => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    event.preventDefault();
    var Email = document.getElementById("email").value;
    var position = document.getElementById("userRole").value;

    var body = {
      email: Email,
      userRole: position,
    };
    axios({
      method: "POST",
      url: process.env.URL_assigne,
      data: body,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        alert("New Role Assigned");
        this.setState({ show: false });
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };
  generateTableData = () => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    axios({
      method: "GET",
      url: process.env.URL_users,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState({
          users: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYxODI5NTk2MCwiZXhwIjoxNjE4MzgyMzYwfQ.eggdEJY4q3q6YKTqybuI2b-5E8bUQw9RU6x9HpEmL9g";
    this.setState({ show: true });
    const id = document.getElementById("search").value;
    axios({
      Method: "GET",
      url: process.env.URL_userbyinput + id,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState({ user: response.data.data });
        this.setState({ userRole: response.data.data.role });
      })
      .catch((err) => console.log(err));
    axios({
      Method: "GET",
      url: process.env.URL_roles,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState({ roleName: response.data.roles });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount = () => {
    this.generateTableData();
  };

  render() {
    const { show, users,user,userRole,roleName,searchTerm } = this.state;
    
    return (
      <>
        <div className="mb-2" style={{ padding: "20px 5px 20px 5%" }}>
          <Modal
            show={show}
            className="modal"
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton />

            <Modal.Body>
              <Form onSubmit={this.handleAssign}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={user.fullname}
                    readOnly
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    readOnly
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={userRole.name}
                    readOnly
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>New Role</Form.Label>
                  <Form.Control as="select" id="userRole">
                    {roleName.map((role, i) => {
                      return <option>{role.name}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
                <div inline>
                  <Button
                    className="login-submit"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    Assign
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
          <Form inline>
            <Form.Control
              className="mr-sm-2"
              type="text"
              placeholder="Search by name or Email"
              onChange={this.onFilteredChangeCustom}
            />
          </Form>
          <Table striped bordered hover size="sm" id="users">
            <thead>
              <tr onClick={this.handleShow}>
                <th>#</th>
                <th>
                  Full Name{" "}
                  {<img src={edit} width="15px" height="15px" alt="edit" />}
                </th>
                <th>
                  Email{" "}
                  {<img src={edit} width="15px" height="15px" alt="edit" />}
                </th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    searchTerm !== "" &&
                    (val.fullname
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                      val.email
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()))
                  ) {
                    return val;
                  }
                })
                .map((user, i) => {
                  return (
                    <tr key={user.id}>
                      <td>{i + 1}</td>
                      <td onClick={this.handleCellClick}>{user.fullname}</td>
                      <td onClick={this.handleCellClick}>{user.email}</td>
                      <td>{user.role.name}</td>
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

export default AdminPage;
