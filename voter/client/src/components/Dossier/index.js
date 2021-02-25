import React, {useEffect, useState} from "react";
import axios from "axios";
import SenatorPane from "./SenatePane";
import RepPane from "./RepPane";

function Dossier( {senators, reps}) {

  //   const [senators, getSenators] = useState([]);

  // const senAPI =
  //   "https://api.propublica.org/congress/v1/members/senate/ut/current.json";
  // useEffect(() => {
  //   axios
  //     .get(senAPI, {
  //       headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
  //     })
  //     .then((res) => {
  //       getSenators(res.data.results);
  //     });
  // }, []);

  // console.log(senators);

  // const [reps, getReps] = useState([]);

  // const houseAPI =
  //   "https://api.propublica.org/congress/v1/members/house/ut/current.json";
  // useEffect(() => {
  //   axios
  //     .get(houseAPI, {
  //       headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
  //     })
  //     .then((res) => {
  //       getReps(res.data.results);
  //     });
  // }, []);
 
    if (senators) {
        return(
            <SenatorPane senators={senators}/>
        )
    } else return (
        <RepPane reps={reps}/>
    )
   
}

  export default Dossier;