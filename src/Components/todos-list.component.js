import React, { Component } from "react";

import axios from "axios";
import Table from "./table.component";

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    this.getTodo();
    this.forceUpdate(this.getTodo());
  }

  getTodo = () => {
    axios
      .get("https://broken-temperature.glitch.me/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentWillMount() {}

  todoList = () =>
    this.state.todos.map((currentTodo, i) => (
      <Table todo={currentTodo} key={i} />
    ));

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table
          className="table table-bordered table-striped"
          style={{ marginTop: 20 }}
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Date</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
