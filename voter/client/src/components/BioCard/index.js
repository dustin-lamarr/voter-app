import React, {useEffect, useState} from "react";
import axios from "axios";
import Quickview from "../Quickview";

function BioCard({ senator }) {
 console.log(senator)
  return (

<div className="card" >
  <img src="https://via.placeholder.com/100.png" className="card-img-top" 
  alt="..."></img>
  <div className="card-body">
    <h5 className="card-title"> member name here</h5>
    <p className="card-text">Some other info here </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Twitter</a>
    <a href="#" className="card-link">Facebook</a>
  </div>
</div>

        // <ul className="justify-start list-unstyled">
        //   {members.map((member) => {
        //     return (
        //     <Quickview key={member.id}>
        //       <div className="row p-2">
        //       <div className="col-4">
        //         <img src="https://via.placeholder.com/100" className="img-thumbnail" alt="placeholder"/>
        //       </div>
        //       <div className="col-8">
        //       <p>{member.first_name} {member.last_name} 
        //       Party: {member.party} State: {member.state}</p>
        //       </div>
        //       </div>
        //       </Quickview>
        //     )
        //   })}
        // </ul>
      
    
  );
}

export default BioCard;