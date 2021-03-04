import axios from "axios";
// WC6aoOLgSUocbUqZnImncwHcebBAq2k7hB4JXIT9
// IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A
 function senAPI({ estado }) {
      return axios.get(`https://api.propublica.org/congress/v1/members/senate/${estado}/current.json`,
    {
        headers: { "X-API-Key": "WC6aoOLgSUocbUqZnImncwHcebBAq2k7hB4JXIT9"},
    }); 
  }

 function houseAPI(){
   return axios.get("https://api.propublica.org/congress/v1/members/house/ut/current.json", {
      headers: { "X-API-Key": "WC6aoOLgSUocbUqZnImncwHcebBAq2k7hB4JXIT9"},
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