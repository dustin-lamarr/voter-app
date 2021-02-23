import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import SummaryRow from "../components/SummaryRow";

function Dashboard() {
  const [states, getStates] = useState([]);

  const styles = {
    rowStyle: {
      background: "white"
    }
  }
  
  useEffect(() => {
    axios.get("./states.json").then((res) => {
      getStates(res.data.states);
    });
  }, []);

  return (
    <Container>
      <div className="row h-100 mx-5" style={styles.rowStyle}>
        <div className="col-4 border border-5">
          <Navpane states={states} />
        </div>
        <div className="col-8 border border-5 p-4">
          <SummaryRow />
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
