import React from "react";
import BioCard from "../BioCard";


function Legislators({ senators, reps, onClick, doss }) {
// const [senatorView, setSenatorView] = useState();


  return (
   <div className="container">
            <div className="row h-50">
              
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
                  onClick={onClick}
                  doss={doss}
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
                  onClick={onClick}
                  doss={doss}
                  />
                  </div>);
                })}
          </div>
          </div>  
  );
}

export default Legislators;