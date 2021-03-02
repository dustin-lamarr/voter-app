import React, { useEffect, useState } from "react";
import { apiFeds } from "../utils/api";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import InfoWindow from "../components/InfoWindow";

export function Dashboard() {
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
      <div className="container">
        <div className="row mx-5" style={styles.rowStyle}>
          <div className="col-3 border border-5">
            <Navpane onClick={loadLegs} legs={legs} />
          </div>
          <div className="col-9 border border-5 p-4">
            <InfoWindow reps={reps} senators={senators} />
          </div>
        </div>
      </div>
    </Container>
  );
}
