import React, { useState } from "react";
import SummaryRow from "../SummaryRow";

function StateLink({ state }) {
  // const [stateAbbr, getStates] = useState([state]);

  // const showStateSens = (clickedState) => {
  //   // console.log(clickedState);

  //   getStates(clickedState);
  //   return <SummaryRow props="clickedprops"></SummaryRow>;
  // };

  return (
    <>
      <a
        className="nav-link"
        href="#"
        // onClick={() => {
        //   showStateSens(state);
        // }}
      >
        {state}
      </a>
    </>
  );
}

export default StateLink;
