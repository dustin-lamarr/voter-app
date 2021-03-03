import React, { useEffect, useState } from "react";
import { apiReps } from "../utils/api";
import Container from "../components/Container";
import Dashboard from "../components/Dashboard";
import BioCard from "../components/BioCard";

export function StateView() {
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  const [stateLegs, getStateLegs] = useState([]);


  useEffect(() => {
    apiReps.civicAPI().then((res) => {
   const stateReps =  res.data.officials.slice(7)
    getStateLegs(stateReps);
   
    });
  }, []);
  console.log(stateLegs)
  return (
    <Container>
    <Dashboard stateLegs={stateLegs}>
    <div className="row">
              
              {stateLegs.map((senator, i) => {
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
            
              {stateLegs.map((rep, i) => {
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
