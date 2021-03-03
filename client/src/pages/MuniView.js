import React, { useEffect, useState } from "react";
import { apiReps } from "../utils/api";
import Container from "../components/Container";
import Dashboard from "../components/Dashboard";
import BioCard from "../components/BioCard";

export function MuniView() {
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  const [muni, getMuni] = useState([]);

  useEffect(() => {
    apiReps.civicAPI().then((res) => {
      getMuni(res.data.results);
    });
  }, []);

console.log(muni)

  return (
    <Container>
    <Dashboard muni={muni}>
    <div className="row">
              
              {muni.map((senator, i) => {
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
            
              {muni.map((rep, i) => {
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
