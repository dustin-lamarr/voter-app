import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navpane from "../components/Navpane";
import InfoWindow from "../components/InfoWindow";

export function Profile() {
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
            <Navpane  />
          </div>
          <div className="col-9 border border-5 p-4">
            <InfoWindow  />
          </div>
        </div>
      </div>
    </Container>
  );
}

