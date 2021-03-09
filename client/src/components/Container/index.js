import React from "react";
import "./style.css"

function Container({ children }) {
  
  return <div className="container-fluid p-4" id="container-bg"> {children} </div>

}

export default Container;
