import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import Legislators from "../components/LegislatorView";
import Dossier from "../components/Dossier";
import { render } from "react-dom";

function Dashboard() {
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  
  const [legs, getLegs] = useState(false);
  
  const loadLegs = (event) => {
    // event.preventDefault();

    getLegs((legs) => !legs);
  };

  const [doss, getDossier] = useState(false);
  
  const loadDossier = (event) => {
    // event.preventDefault();
    console.log(event.target);
    getDossier((doss) => !doss);
    console.log(doss);
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
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
      })
      .then((res) => {
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
            {legs === true ? (
              <Legislators reps={reps} senators={senators} />
            ) : (
              ""
            )}
            {doss === true ? (
              <Dossier
                reps={reps}
                senators={senators}
                onClick={loadDossier}
                doss={doss}
                />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
