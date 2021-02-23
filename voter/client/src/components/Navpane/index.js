import React from "react";
import StateLink from "../StateLink";

function Navpane({ states }) {
  return (
    <nav className="nav flex-column">
      {states.map((estado, i) => {
        return <StateLink key={i} state={estado} defaultValue={estado}></StateLink>;
      })}
    </nav>
  );
}

export default Navpane;
