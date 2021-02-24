import React from "react";
import Container from "../components/Container";
import Navpane from "../components/Navpane";

function Dossier() {
 
    const styles = {
        rowStyle: {
          background: "white"
        }
      }

  return (
    <Container>
    <div className="container vh-100">
      <div className="row h-100 mx-5" style={styles.rowStyle}>
        <div className="col-3 border border-5">
          <Navpane/>
        </div>
        <div className="col-9 border border-5 p-4">
        </div>
      </div>
      </div>
      </Container>
  );
}

export default Dossier;