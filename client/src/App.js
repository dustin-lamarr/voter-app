import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/api";
import { useAuth } from "./utils/context";
import { Home, Login, Signup, DashboardView, FedsView, StateView, MuniView } from "./pages";
import Navbar from "../src/components/Navbar";
// import HiddenRoute from "./components/HiddenRoute"

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

  // const [userAddress, getUserAddress] = useState(
  //   { address: "1080 W Pleasant View Dr.",
  //   address2: "",
  //   city: "Pleasant View",
  //   estado: "UT",
  //   zip: "84404"
  //   });

  // useEffect(() => {
  //   apiUsers.getProfile().then((res) => {
  //     const tempObject = {
  //       ...userAddress,
  //       address: res.data.profile[0].address,
  //       address2: res.data.profile[0].address2,
  //       city: res.data.profile[0].city,
  //       estado: res.data.profile[0].estado,
  //       zip: res.data.profile[0].zip
  //     }
  //     getUserAddress(tempObject);
  //   });
  // }, [userAddress]);

  if (!state.isReady) {
    return null;
  };


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
      <Route exact path="/dashboard/municipal" component={MuniView}/>
      {/* <HiddenRoute exact path="/voter-profile" component={VoterProfile}/> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
