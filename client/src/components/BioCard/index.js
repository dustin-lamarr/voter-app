import React from "react";

function BioCard({ name, role, party, twitter, facebook, nextElection, i, onClick }) {
  const partyName = party;

  return (
    <div className="card" key={i}>
      
      <div className="card-body">
        <div className="row">
        <div className="col-sm">
        <img
        src="https://via.placeholder.com/100.png"
        className="card-img-top img-thumbnail"
        alt="..."
        style={{height:"100px", width:"100px"}}
      ></img>
        </div>
          <div className="col-sm">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{role}</p>
        </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Party: {partyName === "R" ? "Republican" : "Democrat"}
        </li>
        <li className="list-group-item">Next Election: {nextElection}</li>
        <li className="list-group-item">
          Twitter:{" "}
          <a href={`https://twitter.com/${twitter}`} className="card-link">
            @{twitter}
          </a>
        </li>
        <li className="list-group-item">
          Facebook:{" "}
          <a href="https://www.facebook.com/" className="card-link">
            {facebook}
          </a>
        </li>
      </ul>
      <div className="card-footer">
            <button type="button" className="btn btn-outline-success">
            More Info
          </button>
        
      </div>
    </div>
  );
}

export default BioCard;
