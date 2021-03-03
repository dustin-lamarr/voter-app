import React from "react";
import BioCard from "../BioCard";


function Legislators(props) {

 return (
   <div className="container">
            <div className="row h-50">
              
                {props.senators.map((senator, i) => {
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
              
                {props.reps.map((rep, i) => {
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
          </div>  
  );
}

export default Legislators;
