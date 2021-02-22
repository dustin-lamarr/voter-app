import React, { useEffect, useState } from "react";
import axios from "axios";
import Navpane from "../Navpane";
import SummaryRow from "../SummaryRow";

function Container({ children }) {
  
  const [states, getStates] = useState([]);
  

  useEffect(() => {
    axios.get("./states.json").then((res) => {
      getStates(res.data.states);
    });
  }, []);

 

  return (
    <div className="container">
      {
        <div className="row h-100">
          <div className="col-4 border border-5"><Navpane states={states}></Navpane></div>
          <div className="col-8 border border-5">
            <SummaryRow></SummaryRow>
          </div>
        </div>
      }
    </div>
  );
}

export default Container;
