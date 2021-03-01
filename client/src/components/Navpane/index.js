import React from "react";

function Navpane({ onClick }) {
  return (
    <nav className="nav flex-column list-group py-3">
      <button
        className="nav-link list-group-item list-group-item-action border-0"
        aria-current="page"
        type="button"
        onClick={(event) => onClick(event)}
        
      >
        Federal Legislators
      </button>
    </nav>
  );
}

export default Navpane;
