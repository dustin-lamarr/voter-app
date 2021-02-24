import React from "react";

function Navpane() {
  return (
    <nav className="nav flex-column">
      <a className="nav-link active" aria-current="page" 
      href="/dashboard/fedreps">Federal Legislators</a>
    </nav>
  );
}

export default Navpane;
