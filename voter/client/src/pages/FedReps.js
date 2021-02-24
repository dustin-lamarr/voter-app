import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import BioCard from "../components/BioCard";

function FedReps() {
  const styles = {
    rowStyle: {
      background: "white",
    },
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
      <div className="container vh-50">
        <div className="row mx-5" style={styles.rowStyle}>
          <div className="col-3 border border-5">
            <Navpane />
          </div>
          <div className="col-9 border border-5 p-4">
            <div className="row">
              
                {senators.map((senator, i) => {
                  return ( <div className="col-sm-6">
                  <BioCard senator={senator} key={i} />
                  </div>);
                })}
              </div>
            <hr/>
            <div className="row align-items-start">
              
                {reps.map((rep, i) => {
                  return (
                    <div className="col">
                  <BioCard rep={rep} key={i} />
                  </div>);
                })}
              </div>        
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FedReps;
