import React from "react";

function Navbar() {
  const styles = {
    navStyle: {
      background: "#000b1a",
      color: "white",
      height: "100px"
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-3 shadow-sm" style={styles.navStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/images/voter-logo-wht-bx.png" alt="voter logo" style={{height: "100px"}}/>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/dashboard"
                tabIndex="-1"
                aria-disabled="false"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
