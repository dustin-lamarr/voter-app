import React, { useEffect, useState } from "react";
import { apiReps, apiUsers } from "../utils/api";
import Container from "../components/Container";
import Dashboard from "../components/Dashboard";
import BioCard from "../components/BioCard";

export function StateView() {
  const [userAddress, getUserAddress] = useState({
    address: "1080 W Pleasant View Dr.",
    address2: "",
    city: "Pleasant View",
    estado: "UT",
    zip: "84404",
  });

  const [stateLegs, getStateLegs] = useState([]);

  useEffect(() => {
    apiUsers.getProfile().then((res) => {
      if (!userAddress) {
        return;
      }
      const tempObject = {
        address: res.data.profile[0].address,
        address2: res.data.profile[0].address2,
        city: res.data.profile[0].city,
        estado: res.data.profile[0].estado,
        zip: res.data.profile[0].zip,
      };
      getUserAddress(tempObject);
    });
  }, []);

  useEffect(() => {
    apiReps.civicAPI(userAddress).then((res) => {
      const officesArray = res.data.offices;
      const officialsArray = res.data.officials;
      const dataArray = [];
console.log(officesArray)
      for (const key in officialsArray) {
        const politicianObject = {
          // ...userAddress,
          name: officialsArray[key].name,
          party: officialsArray[key].party,
          twitter: "",
          facebook: "",
          role: "",
          image: officialsArray[key].photoUrl
            ? officialsArray[key].photoUrl
            : "",
          level: officialsArray[key].levels
        };
        for (const social in officialsArray[key].channels) {
          if (officialsArray[key].channels[social].type === "Twitter") {
            politicianObject.twitter = officialsArray[key].channels[social].id;
          }
          if (officialsArray[key].channels[social].type === "Facebook") {
            politicianObject.facebook = officialsArray[key].channels[social].id;
          }
        }
        for (const role in officesArray) {
          if (officesArray[role].officialIndices[0] == key) {
            politicianObject.role = officesArray[role].name;
          }
        }
        for (const level in officesArray) {
          if (officesArray[level].officialIndices[0] == key) {
            politicianObject.level = officesArray[level].levels[0];
          }
        }


        dataArray.push(politicianObject);
      }
let filteredArray = dataArray.filter(levels => levels == "country")
console.log(filteredArray)
      getStateLegs(dataArray);
    });
  }, [userAddress]);

  console.log(stateLegs);
  

  return (
    <Container>
      <Dashboard stateLegs={stateLegs}>
        <div className="row">
          {stateLegs.map((legs, i) => {
            return (
              <div className="col-sm-6">
                <BioCard
                  i={i}
                  name={legs.name}
                  role={legs.role}
                  party={legs.party}
                  twitter={legs.twitter}
                  facebook={legs.facebook}
                  // nextElection={legs.next_election}
                  img={legs.image}
                />
              </div>
            );
          })}
        </div>
        <hr />
        {/* <div className="row">
          {stateLegs.map((rep, i) => {
            return (
              <div className="col-sm-3">
                <BioCard
                  i={i}
                  name={rep.name}
                  role={rep.role}
                  party={rep.party}
                  twitter={rep.twitter}
                  facebook={rep.facebook}
                  // nextElection={rep.next_election}
                />
              </div>
            );
          })}
        </div> */}
      </Dashboard>
    </Container>
  );
}
