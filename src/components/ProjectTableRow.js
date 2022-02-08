import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class ProjectTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
  }
  deleteProject() {
    axios
      .delete(
        "http://localhost:4000/projects/delete-project/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Project successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.deadline}</td>
        <td>{this.props.obj.document}</td>
        <td>
          <Link
            className="edit-link"
            to={"/edit-project/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteProject} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
