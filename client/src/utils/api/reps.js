import axios from "axios";

 function senAPI(state) {
    return axios.get(`https://api.propublica.org/congress/v1/members/senate/ut/current.json`,
    {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A"},
    }); 
  }

 function houseAPI(){
   return axios.get("https://api.propublica.org/congress/v1/members/house/ut/current.json", {
      headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A"},
    });
}

function civicAPI(){
  return axios
  .get("https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=910%20Halstead%20Dr%2C%20North%20Salt%20Lake%2C%20UT%2C%20USA&includeOffices=true&key=AIzaSyAlZY6STbQRWB7UhWvmPp4YzinamHtOUzc")
}

export const apiReps = {
    senAPI,
    houseAPI,
    civicAPI
  };