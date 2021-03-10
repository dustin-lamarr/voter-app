import React from "react";


function Navbar({ home, dashboard, onClick }) {
  const styles = {
    navStyle: {
      background: "#000b1a",
      color: "white",
      height: "100px",
    },
    navButton: {
      background: "#000b1a",
    },
  };

 
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark border-bottom border-3"
      style={styles.navStyle}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href={`${dashboard ? "/dashboard" : "/"}`}>
          <img
            src="/images/voter-logo-wht-bx.png"
            alt="voter logo"
            style={{ height: "100px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {home && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/dashboard">
                  Dashboard
                </a>
              </li>
            </ul>
          )}

          {auth && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  style={styles.navButton}
                  className="nav-link border-0 "
                  aria-current="page"
                  onClick={onClick}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
