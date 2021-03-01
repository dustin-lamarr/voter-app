import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/api";
import { useAuth } from "./utils/context";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "../src/components/Navbar";

function App() {
  const [state, setState] = useState({
    isReady: false,
  });
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const res = apiAuth.getAuth();
    if (res) {
      setAuth({ ...auth, ...res });
    }
    setState({ ...state, isReady: true });
  }, []);

  if (!state.isReady) {
    return null;
  }

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
