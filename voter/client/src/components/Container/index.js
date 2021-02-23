import React from "react";
import "./style.css"

function Container({ children }) {
  
  return <div className="container-fluid py-5" id="container-bg"> {children} </div>

}

export default Container;
