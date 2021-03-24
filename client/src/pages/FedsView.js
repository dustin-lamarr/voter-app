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
    h4Color: {
      color: "#6B000B"
    }
  };

  const [userAddress, getUserAddress] = useState({
    address: "1080 W Pleasant View Dr.",
    address2: "",
    city: "Pleasant View",
    estado: "UT",
    zip: "84404",
  });

  const [senators, getSenators] = useState([]);
  const [reps, getReps] = useState([]);
  const [feds, getFeds] = useState([]);

useEffect(() => {
  if (!userAddress) {
    return;
  }
  apiUsers.getProfile().then( (res) => {
    const tempObject = {
      address: res.data.profile[0].address,
      address2: res.data.profile[0].address2,
      city: res.data.profile[0].city,
      estado: res.data.profile[0].estado,
      zip: res.data.profile[0].zip
    }
    console.log(tempObject)
    getUserAddress(tempObject);
});
}, []);

  useEffect(() => {
      apiReps.senAPI(userAddress).then( async (res) => {
        console.log(res)
        getSenators(res.data.results);
      });
      apiReps.houseAPI(userAddress).then( async (res) => {
        getReps(res.data.results);
      });
      apiReps.stateAPI(userAddress).then((res) => {
        getFeds(res.data.officials);
      });
      
  }, [userAddress]);

  
  return (
    
      <Dashboard senators={senators} reps={reps} photos={feds.photoUrl}>
        <div className="row">
        <h4 style={styles.h4Color}>United States Senate</h4>
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
        <h4 style={styles.h4Color}>United States House of Representatives</h4>
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
    
  );
}
