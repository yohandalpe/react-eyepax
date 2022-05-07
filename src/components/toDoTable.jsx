import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class ToDoTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (todo) => (
        <Link
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          to={`/todo/${todo.id}`}
        >
          {todo.title}
        </Link>
      ),
    },
  ];

  render() {
    const { todos } = this.props;
    return <Table columns={this.columns} data={todos} />;
  }
}

export default ToDoTable;
