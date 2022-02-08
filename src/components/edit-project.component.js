import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectDeadline = this.onChangeProjectDeadline.bind(this);
    this.onChangeProjectDocument = this.onChangeProjectDocument.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: "",
      deadline: "",
      document: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/projects/edit-project/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          deadline: res.data.deadline,
          document: res.data.document,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
      .put(
        "http://localhost:4000/projects/update-project/" +
          this.props.match.params.id,
        projectObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Project successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Project List
    this.props.history.push("/project-list");
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
          <Form.Group controlId="Date">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="Date"
              value={this.state.deadline}
              onChange={this.onChangeProjectDeadline}
            />
          </Form.Group>
          <Form.Group controlId="file">
            <Form.Label>Document</Form.Label>
            <Form.Control
              type="file"
              value={this.state.document}
              onChange={this.onChangeProjectDocument}
            />
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">
            Update Project
          </Button>
        </Form>
      </div>
    );
  }
}
