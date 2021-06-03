import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
