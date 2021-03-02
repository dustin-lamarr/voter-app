import axios from "axios";

 function senAPI() {
    return axios.get("https://api.propublica.org/congress/v1/members/senate/ut/current.json",
    {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A"},
    }); 
  }

 function houseAPI(){
   return axios.get("https://api.propublica.org/congress/v1/members/house/ut/current.json", {
      headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A"},
    });
}


export const apiFeds = {
    senAPI,
    houseAPI
  };