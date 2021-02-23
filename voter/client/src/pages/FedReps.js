import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import BioCard from "../components/BioCard";

function FedReps() {
  const [members, getMembers] = useState([]);

  const apiCall =
    "https://api.propublica.org/congress/v1/116/senate/members.json";
  useEffect(() => {
    axios
      .get(apiCall, {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
      })
      .then((res) => {
        getMembers(res.data.results[0].members);
      });
  }, []);

  console.log(members);
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  return (
    <Container>
      <div className="container vh-50">
        <div className="row mx-5" style={styles.rowStyle}>
          <div className="col-3 border border-5">
            <Navpane />
          </div>
          <div className="col-9 border border-5 p-4">
            <div className="row h-50">
              <div className="col-sm-6">
                <BioCard members={members} />
              </div>
              <div className="col-sm-6">
                <BioCard members={members} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FedReps;
