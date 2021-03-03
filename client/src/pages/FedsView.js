import React, { useEffect, useState } from "react";
import { apiFeds } from "../utils/api";
import Container from "../components/Container";
import Dashboard from "../components/Dashboard";
import BioCard from "../components/BioCard";

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

  useEffect(() => {
    apiFeds.senAPI().then((res) => {
      getSenators(res.data.results);
    });
    apiFeds.houseAPI().then((res) => {
      getReps(res.data.results);
    });
  }, []);

  return (
    <Container>
    <Dashboard senators={senators} reps={reps}>
    <div className="row">
              
              {senators.map((senator, i) => {
                return ( <div className="col-sm-6">
                <BioCard 
                i={i}
                name={senator.name}
                role={senator.role}
                party={senator.party}
                twitter={senator.twitter_id}
                facebook={senator.facebook_account}
                nextElection={senator.next_election}
                
                />
                </div>);
              })}
            </div>
          <hr/>
          <div className="row">
            
              {reps.map((rep, i) => {
                return ( <div className="col-sm-3">
                <BioCard 
                i={i}
                name={rep.name}
                role={rep.role}
                party={rep.party}
                twitter={rep.twitter_id}
                facebook={rep.facebook_account}
                nextElection={rep.next_election}
                
                />
                </div>);
              })}
        </div>
    </Dashboard>
    </Container>
  );
}