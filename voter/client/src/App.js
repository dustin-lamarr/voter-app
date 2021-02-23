import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FedReps from "./pages/FedReps";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Home/>    
      </Route>
      <Route exact path="/dashboard">
      <Dashboard/>
      </Route>
      <Route exact path="/dashboard/fedreps">
      <FedReps/>
      </Route>
      <Route exact path="/login">
      <Login/>
      </Route>
      <Route exact path="/signup">
      <Signup/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
