import React, {useEffect, useState} from "react";
import axios from "axios";
// import Image from "../Image";
import Quickview from "../Quickview";

function SummaryRow() {
  const [members, getMembers] = useState([]);
  const apiCall =
    "https://api.propublica.org/congress/v1/members/senate/" + {state} + "/current.json";
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
    <div className="row border border-5 border-dark">
      <div className="col-4"> 
        <img src="https://via.placeholder.com/150"></img>
      </div> 
      <div className="col-8">
        <ul className="justify-start">
          {members.map((member) => {
            return (
            <Quickview key={member.id}>
              <p>Member: {member.first_name} {member.last_name}</p>
              <p>Party: {member.party}</p>
              <p>State: {member.state}</p>
              </Quickview>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default SummaryRow;
