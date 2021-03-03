import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/api";
import { useAuth } from "./utils/context";
import { Home, Login, Signup, Profile, DashboardView, FedsView, StateView } from "./pages";
import Navbar from "../src/components/Navbar";
import HiddenRoute from "./components/HiddenRoute"

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
        <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/dashboard" component={DashboardView}/>
      <Route exact path="/dashboard/feds" component={FedsView}/>
      <Route exact path="/dashboard/state" component={StateView}/>
      <HiddenRoute exact path="/profile" component={Profile}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
