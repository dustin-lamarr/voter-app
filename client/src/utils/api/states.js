import axios from "axios";

function stateAPI() {
  const apiKey = "AIzaSyAlZY6STbQRWB7UhWvmPp4YzinamHtOUzc";
  axios
  .get("https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=910%20Halstead%20Dr%2C%20North%20Salt%20Lake%2C%20UT%2C%20USA&levels=administrativeArea1&key=AIzaSyAlZY6STbQRWB7UhWvmPp4YzinamHtOUzc")
}

    export const apiStates = {
      stateAPI
    };