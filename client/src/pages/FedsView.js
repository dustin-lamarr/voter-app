import React, { useEffect, useState } from "react";
import { apiFeds } from "../utils/api";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import InfoWindow from "../components/InfoWindow";
import Dashboard from "../components/Dashboard";

export function FedsView() {
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  const [legs, getLegs] = useState(false);
  const loadLegs = (event) => {
    getLegs((legs) => !legs);
  };

  const [stateLegs, getStateLegs] = useState([]);
  const [senators, getSenators] = useState([]);
  const [reps, getReps] = useState([]);

  useEffect((res) => {
    apiFeds.senAPI().then((res) => {
      getSenators(res.data.results);
    });
    apiFeds.houseAPI().then((res) => {
      getReps(res.data.results);
    });
  }, []);

  return (
    <Container>
    <Dashboard senators={senators} reps={reps}></Dashboard>
    </Container>
  );
}
