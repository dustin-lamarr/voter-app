import React from "react";

function SenatorPane({ senators }) {
    
    // const styles = {
    //     rowStyle: {
    //       background: "white"
    //     }
    //   }
    
    console.log(senators)
    return (
    
    <div className="container">
    
        <div className="col-9 border border-5 py-2">
            <div className="row border-bottom border-2 pb-2">
                <div className="col-sm-4">
            <img src="https://via.placeholder.com/100.png" alt="placeholder"></img>
            </div>
            <div className="col-sm-8">
            <div className="row">
            <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          Party: {senators.party === "R" ? "Republican" : "Democrat"}
        </li>
        <li className="list-group-item">Next Election: {senators.next}</li>
        <li className="list-group-item">
          Twitter:{" "}
          <a href={`https://twitter.com/${senators.twitter}`} className="card-link">
            @{senators.twitter}
          </a>
        </li>
        <li className="list-group-item">
          Facebook:{" "}
          <a href="https://www.facebook.com/" className="card-link">
            {senators.facebook}
          </a>
        </li>
      </ul>
    
            </div>
            </div>
            </div>
        </div>
        </div>
    
      
    );
    }
    export default SenatorPane;