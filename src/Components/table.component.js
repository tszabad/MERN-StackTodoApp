import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal.component";
import FlipMove from "react-flip-move";

import moment from "moment";
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete() {
    axios
      .get(
        "https://broken-temperature.glitch.me/todos/delete/" +
          this.props.todo._id
      )
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
    window.location.reload();
  }

  render() {
    return (
      <tr>
        <td className={this.props.todo.todo_completed ? "completed" : ""}>
          {this.props.todo.todo_description}
        </td>
        <td className={this.props.todo.todo_completed ? "completed" : ""}>
          {this.props.todo.todo_responsible}
        </td>
        <td className={this.props.todo.todo_completed ? "completed" : ""}>
          {this.props.todo.todo_priority}
        </td>
        <td className={this.props.todo.todo_completed ? "completed" : ""}>
          {moment(this.props.todo.todo_date).format(" MMMM Do YYYY, h:mm:ss a")}
        </td>
        <td>
          <Link to={"/edit/" + this.props.todo._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <Modal del={this.delete} />
        </td>
      </tr>
    );
  }
}
export default Table;
