import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const [senators, getSenators] = useState([]);
  const senAPI =
    "https://api.propublica.org/congress/v1/members/senate/ut/current.json";
  useEffect(() => {
    axios
      .get(senAPI, {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
      })
      .then((res) => {
        getSenators(res.data.results);
      });
  }, []);

  const [reps, getReps] = useState([]);
  const houseAPI =
    "https://api.propublica.org/congress/v1/members/house/ut/current.json";
  useEffect(() => {
    axios
      .get(houseAPI, {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A"},
      })
      .then((res) => {
        getReps(res.data.results);
      });
  }, []);

console.log(reps)

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


