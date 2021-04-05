import React, { useEffect, useState } from "react";
import { apiReps, apiUsers } from "../utils/api";
import Dashboard from "../components/Dashboard";
import BioCard from "../components/BioCard";
import Dossier from "../components/Dossier";

export function FedsView() {
  const styles = {
    rowStyle: {
      background: "white",
    },
    h4Color: {
      color: "#6B000B",
    },
  };

  const [userAddress, getUserAddress] = useState({
    estado: "UT",
  });

  const [senators, getSenators] = useState([]);
  const [reps, getReps] = useState([]);
  const [state, setState] = useState();
  const [clickInfo, setClickInfo] = useState();

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
    apiReps.senAPI(userAddress).then( (res) => {
      // getSenators(res.data.results[0].members);
      
      const resArray = res.data.results[0].members;
   let senArray = resArray.filter(sens => sens.state == userAddress.estado);
   console.log(senArray)
      getSenators(senArray)
    });

    apiReps.houseAPI(userAddress).then( (res) => {
      const tempArray = res.data.results[0].members;
      let repArray = tempArray.filter(sens => sens.state == userAddress.estado);
      console.log(repArray)
      getReps(repArray);
    });
  }, [userAddress]);

  console.log(senators);
  console.log(clickInfo);

if (!clickInfo) {
  return (
    <Dashboard senators={senators} reps={reps}>
      <div className="row">
        <h4 style={styles.h4Color}>United States Senate</h4>
        {senators.map((senator) => {
          return (
            <div className="col-sm-6">
              <BioCard
                id={senator.id}
                firstName={senator.first_name}
                lastName={senator.last_name}
                role={senator.role}
                party={senator.party}
               image={senator.photoUrl}
                onClick={(event) => {
                  setState(event.target.onClick);
                  setClickInfo(senator);
                }}
              />
            </div>
          );
        })}
      </div>
      <hr />
      <div className="row">
        <h4 style={styles.h4Color}>United States House of Representatives</h4>
        {reps.map((rep) => {
          return (
            <div className="col-sm-3 py-2">
              <BioCard
                id={rep.id}
                firstName={rep.first_name}
                lastName={rep.last_name}
                role={rep.role}
                party={rep.party}
                image={rep.photoUrl}
                onClick={(event) => {
                  setState(event.target.onClick);
                  setClickInfo(rep);
                }}
              />
            </div>
          );
        })}
      </div>
    </Dashboard>
  );
      } else {
        return (
        <Dashboard>
          <Dossier
           id={clickInfo.id}
           name={clickInfo.name}
           role={clickInfo.role}
           party={clickInfo.party}
           twitter={clickInfo.twitter_id}
           facebook={clickInfo.facebook_account}
           nextElection={clickInfo.next_election}
          photos={clickInfo.photoUrl}
          age={clickInfo.date_of_birth}
          >
            
          </Dossier>
        </Dashboard>
        )
      }
}
