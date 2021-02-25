import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import Legislators from "../components/LegislatorView"
import Dossier from "../components/Dossier";

function Dashboard() {
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  const [senators, getSenators] = useState([]);
  const [doss, getDossier]= useState();

  const loadDossier = event => {
    event.preventDefault();
    return (
  <Dossier senators={senators} reps={reps}/>
    )
  }

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

  console.log(senators);

  const [reps, getReps] = useState([]);

  const houseAPI =
    "https://api.propublica.org/congress/v1/members/house/ut/current.json";
  useEffect(() => {
    axios
      .get(houseAPI, {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
      })
      .then((res) => {
        getReps(res.data.results);
      });
  }, []);

  console.log(reps);

  return (
    <Container>
      <div className="container">
        <div className="row mx-5" style={styles.rowStyle}>
          <div className="col-3 border border-5">
            <Navpane/>
          </div>
          <div className="col-9 border border-5 p-4">
            {/* <FedReps senators={senators} reps={reps}/> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
