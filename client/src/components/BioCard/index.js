import React from "react";

function BioCard({ image, firstName, lastName, role, party, id, onClick }) {
  const partyName = party;

  return (
    <div className="card" key={id}>
      <div className="card-body">
        <div className="row">
        <div className="col-sm-auto">
        <h5 className="card-title">{firstName} {lastName}</h5>
        <p className="card-text">{role}</p>
        </div>
        <div className="col-sm">
          { image ? 
        <img
        src={image}
        className="card-img-top img-thumbnail"
        alt="..."
        style={{height:"100px", width:"100px"}}
      ></img> : ""}
        </div>
          
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Party: {partyName}
        </li>
        
      </ul>
      <div className="card-footer">
            <button className="btn btn-outline-success" onClick={onClick}>
            More Info
          </button>
        
      </div>
    </div>
  );
}

export default BioCard;
