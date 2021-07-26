import React, { Component } from "react";
import Counter from "./Components/Counter/Counter";
import "./App.css";
import { Route } from "react-router-dom";
import Clock from "./Components/Clock/Clock";
import Header from './Components/Header/Header'

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Route exact path='/'>
          <Counter />
        </Route>
        <Route exact path='/time'>
          <Clock />
        </Route>
      </>
    );
  }
}

export default App;
