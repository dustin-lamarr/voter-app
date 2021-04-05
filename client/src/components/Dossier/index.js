import React from "react";

function Dossier({ firstName, lastName, title, party, twitter, facebook, nextElection, id, image, age }) {
  const partyName = party;

  return (
    <div className="row m-auto">
      <div className="col-sm-4">
    <div className="card" key={id}>
      <div className="card-body">
        <div className="row">
        {/* <div className="col-sm">
          { image !== "" ? 
        <img
        src={image}
        className="card-img-top img-thumbnail"
        alt="..."
        style={{height:"100px", width:"100px"}}
      ></img>: ""}
        </div> */}
          <div className="col-sm">
        <h5 className="card-title">{firstName} {lastName}</h5>
        <p className="card-text">{age}</p>
        <p className="card-text">{title}</p>
        </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Party: {partyName}
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
          <a href={`https://www.facebook.com/${facebook}`} className="card-link">
            {facebook}
          </a>
        </li>
      </ul>
      
    </div>
    </div>
    <div className="col-sm-8"></div>
    </div>
  );
}

  export default Dossier;