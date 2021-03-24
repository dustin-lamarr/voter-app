import axios from "axios";
// WC6aoOLgSUocbUqZnImncwHcebBAq2k7hB4JXIT9
// IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A
 function senAPI({ estado }) {
      return axios.get(`https://api.propublica.org/congress/v1/members/senate/${estado}/current.json`,
    {
        headers: { "X-API-Key": "WC6aoOLgSUocbUqZnImncwHcebBAq2k7hB4JXIT9"},
    }); 
  }

 function houseAPI({ estado }){
   return axios.get(`https://api.propublica.org/congress/v1/members/house/${estado}/current.json`, {
      headers: { "X-API-Key": "WC6aoOLgSUocbUqZnImncwHcebBAq2k7hB4JXIT9"},
    });
}

function stateAPI({ address, address2, city, estado, zip }){
  return axios
  .get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}${city}${estado}${zip}USA&includeOffices=true&levels=administrativeArea1&key=AIzaSyAlZY6STbQRWB7UhWvmPp4YzinamHtOUzc`)
}

function municipalAPI({ address, address2, city, estado, zip }){
  return axios
  .get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}${city}${estado}${zip}USA&includeOffices=true&levels=administrativeArea2&key=AIzaSyAlZY6STbQRWB7UhWvmPp4YzinamHtOUzc`)
}

export const apiReps = {
    senAPI,
    houseAPI,
    stateAPI, 
    municipalAPI
  };