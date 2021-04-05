import React from "react";
import { apiAuth } from "../../utils/api";
import { useAuth } from "../../utils/context";
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
  const { auth, setAuth } = useAuth();

  function _logout() {
    apiAuth.logout();
    setAuth(null);
  }

  
  return (
    <>
    <Navbar auth={auth} onClick={_logout}/>
    <Container>
        <div className="row mx-5 border-top-5" style={styles.rowStyle}>
          <div className="col-3 border border-5">
            <Navpane></Navpane>
          </div>
          <div className="col-9 border border-5 p-2">
          {children}
          </div>
        </div>
    </Container>
    </>
  );
}

export default Dashboard;
