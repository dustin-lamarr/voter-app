import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import SummaryRow from "../components/SummaryRow";

function Home() {
  const [states, getStates] = useState([]);
  
  useEffect(() => {
    axios.get("./states.json").then((res) => {
      getStates(res.data.states);
    });
  }, []);

  return (
    <Container>
      <div className="row h-100">
        <div className="col-4 border border-5">
          <Navpane states={states} />
        </div>
        <div className="col-8 border border-5">
          <SummaryRow />
        </div>
      </div>
    </Container>
  );
}

export default Home;
