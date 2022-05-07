import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ToDo from "./components/toDo";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/todo" component={ToDo} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/todo" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
