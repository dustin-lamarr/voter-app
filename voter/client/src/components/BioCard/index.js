import React, {useEffect, useState} from "react";
import axios from "axios";
import Quickview from "../Quickview";

function BioCard({ members }) {
 
  return (

<div class="card" >
  <img src="https://via.placeholder.com/100.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{members.name}</h5>
    <p class="card-text">Some quick example text to </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
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