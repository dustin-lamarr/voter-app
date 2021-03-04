import React, { useEffect, useState } from "react";
import { apiReps, apiUsers } from "../utils/api";
import Container from "../components/Container";
import Dashboard from "../components/Dashboard";
import BioCard from "../components/BioCard";

export function FedsView() {
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  const [userAddress, getUserAddress] = useState(
    { address: "1080 W Pleasant View Dr.",
    address2: "",
    city: "Pleasant View",
    estado: "UT",
    zip: "84404"
    });

  useEffect(() => {
    apiUsers.getProfile().then((res) => {
      const tempObject = {
        address: res.data.profile[0].address,
        address2: res.data.profile[0].address2,
        city: res.data.profile[0].city,
        estado: res.data.profile[0].estado,
        zip: res.data.profile[0].zip
      }
      getUserAddress(tempObject);
    });
  }, []);


  const [senators, getSenators] = useState([]);
  const [reps, getReps] = useState([]);
  const [feds, getFeds] = useState([]);

  useEffect(() => {
    apiReps.senAPI(userAddress).then((res) => {
      console.log(res)
      getSenators(res.data.results);
    });
    apiReps.houseAPI(userAddress).then((res) => {
      getReps(res.data.results);
    });
    apiReps.civicAPI(userAddress).then((res) => {
      getFeds(res.data.officials);
    });
  }, [userAddress]);

  return (
    <Container>
      <Dashboard senators={senators} reps={reps} photos={feds.photoUrl}>
        <div className="row">
          {senators.map((senator, i) => {
            return (
              <div className="col-sm-6">
                <BioCard
                  i={i}
                  name={senator.name}
                  role={senator.role}
                  party={senator.party}
                  twitter={senator.twitter_id}
                  facebook={senator.facebook_account}
                  nextElection={senator.next_election}
                />
              </div>
            );
          })}
        </div>
        <hr />
        <div className="row">
          {reps.map((rep, i) => {
            return (
              <div className="col-sm-4">
                <BioCard
                  i={i}
                  name={rep.name}
                  role={rep.role}
                  party={rep.party}
                  twitter={rep.twitter_id}
                  facebook={rep.facebook_account}
                  nextElection={rep.next_election}
                />
              </div>
            );
          })}
        </div>
      </Dashboard>
    </Container>
  );
}
