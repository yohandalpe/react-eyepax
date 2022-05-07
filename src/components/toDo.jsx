import React, { Component } from "react";
import ToDoTable from "./toDoTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class ToDo extends Component {
  state = {
    todos: [],
    isFetched: false,
    currentPage: 1,
    pageSize: 10,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          todos: json,
          isFetched: true,
        });
      });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, todos: allToDos } = this.state;
    const todos = paginate(allToDos, currentPage, pageSize);
    return { totalCount: allToDos.length, data: todos };
  };

  render() {
    const { length: count } = this.state.todos;
    const { pageSize, currentPage } = this.state;
    if (count === 0) return <p>There are no To Dos in the database.</p>;
    const { totalCount, data: todos } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          <p>Showing {totalCount} To Dos in the database.</p>
          <ToDoTable todos={todos} />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default ToDo;
