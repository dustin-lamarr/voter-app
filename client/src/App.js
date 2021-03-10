import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/api";
import { useAuth } from "./utils/context";
import { Home, Login, Signup, DashboardView, FedsView, StateView, MuniView, MadeWith } from "./pages";
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
  };


  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/dashboard/feds" component={FedsView}/>
      <Route exact path="/dashboard/state" component={StateView}/>
      <Route exact path="/dashboard/municipal" component={MuniView}/>
      <Route exact path="/madewith" component={MadeWith}/>
      <HiddenRoute exact path="/dashboard" component={DashboardView}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
