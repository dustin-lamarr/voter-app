import React from "react";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import InfoWindow from "../components/InfoWindow";

export function Dashboard({ props, children }) {
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
            <Navpane props={props}>{children}</Navpane>
          </div>
          <div className="col-9 border border-5 p-4">
            <InfoWindow props={props} />
          </div>
        </div>
      </div>
    </Container>
  );
}
