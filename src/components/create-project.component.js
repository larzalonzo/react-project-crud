import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateProject extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectDeadline = this.onChangeProjectDeadline.bind(this);
    this.onChangeProjectDocument = this.onChangeProjectDocument.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      deadline: "",
      document: "",
    };
  }

  onChangeProjectName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeProjectDeadline(e) {
    this.setState({ deadline: e.target.value });
  }

  onChangeProjectDocument(e) {
    this.setState({ document: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const projectObject = {
      name: this.state.name,
      deadline: this.state.deadline,
      document: this.state.document,
    };
    axios
      .post("http://localhost:4000/projects/create-project", projectObject)
      .then((res) => console.log(res.data));

    this.setState({ name: "", email: "", rollno: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeProjectName}
            />
          </Form.Group>

          <Form.Group controlId="Deadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="Date"
              value={this.state.date}
              onChange={this.onChangeProjectDeadline}
            />
          </Form.Group>

          <Form.Group controlId="Document">
            <Form.Label>Document</Form.Label>
            <Form.Control
              type="file"
              value={this.state.document}
              onChange={this.onChangeProjectDocument}
            />
          </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Create Project
          </Button>
        </Form>
      </div>
    );
  }
}
