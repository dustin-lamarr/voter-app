import React from "react";
import Container from "../Container";
import Navpane from "../Navpane";
import Navbar from "../Navbar"

function Dashboard(props) {
  const { children } = props
  const styles = {
    rowStyle: {
      background: "white",
    },
  };

  return (
    <>
    <Navbar/>
    <Container>
        <div className="row mx-5" style={styles.rowStyle}>
          <div className="col-3 border border-5 border-top-0">
            <Navpane></Navpane>
          </div>
          <div className="col-9 border border-5 border-top-0 p-2">
          {children}
          </div>
        </div>
    </Container>
    </>
  );
}

export default Dashboard;
