import React, {useEffect, useState} from "react";
import axios from "axios";
// import Image from "../Image";
import Quickview from "../Quickview";

function SummaryRow() {
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
  return (
    
        <ul className="justify-start list-unstyled">
          {members.map((member) => {
            return (
            <Quickview key={member.id}>
              <div className="row p-2">
              <div className="col-4">
                <img src="https://via.placeholder.com/100" className="img-thumbnail" alt="placeholder"/>
              </div>
              <div className="col-8">
              <p>{member.first_name} {member.last_name} 
              Party: {member.party} State: {member.state}</p>
              </div>
              </div>
              </Quickview>
            )
          })}
        </ul>
      
    
  );
}

export default SummaryRow;
