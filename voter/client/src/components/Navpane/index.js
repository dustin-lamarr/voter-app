import React from "react";

function Navpane() {
  return (
    <nav className="nav flex-column">
      <a className="nav-link active" aria-current="page" 
      href="/dashboard/fedreps">Federal Representatives</a>
    </nav>
  );
}

export default Navpane;
