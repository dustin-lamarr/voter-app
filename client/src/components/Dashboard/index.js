import React from "react";
import Container from "../Container";
import InfoWindow from "../InfoWindow";
import Navpane from "../Navpane";

function Dashboard(props) {
  const { children, senators, reps } = props
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  return (
    <Container>
      <div className="container">
        <div className="row mx-5" style={styles.rowStyle}>
          <div className="col-3 border border-5">
            <Navpane></Navpane>
          </div>
          <div className="col-9 border border-5 p-4">
          {children}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
