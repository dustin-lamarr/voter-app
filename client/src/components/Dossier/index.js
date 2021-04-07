import React from "react";

function Dossier({
  firstName,
  lastName,
  title,
  party,
  twitter,
  facebook,
  nextElection,
  id,
  image,
  age,
  youtube,
  office,
  phone,
  fax,
  url,
  contact,
  totalVotes,
  missedVotes,
  missedVotesPct,
  votesWParty,
}) {
  return (
    <div className="container-fluid py-2 px-0">
      <div className="row border-5 border-bottom d-inline pb-3">
        <h5 className="d-inline">
          {firstName} {lastName}
        </h5>
        <p className="m-0 d-inline">Age: {age}</p>
        <p className="m-0 d-inline">Title: {title}</p>
        <p className="m-0 d-inline">Party: {party}</p>
        <p className="m-0 d-inline">Re-Election: {nextElection}</p>
      </div>
      <div className="row border-5 border-bottom my-3 py-3">
        <div className="col-sm-auto">
          <ul className="list-group">
            <li className="list-group-item border-top-0 border-end-0 border-start-0">
              <h6 className="card-title">Social Media:</h6>
            </li>
            <li className="list-group-item border-0">
              Twitter:{" "}
              <a href={`https://twitter.com/${twitter}`} className="card-link">
                @{twitter}
              </a>
            </li>
            <li className="list-group-item border-0">
              Facebook:{" "}
              <a
                href={`https://www.facebook.com/${facebook}`}
                className="card-link"
              >
                {facebook}
              </a>
            </li>
            <li className="list-group-item border-0">
              YouTube:{" "}
              <a
                href={`https://www.youtube.com/${youtube}`}
                className="card-link"
              >
                {youtube}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-auto">
          <ul className="list-group">
            <li className="list-group-item border-top-0 border-end-0 border-start-0">
              <h6 className="card-title">Contact Info:</h6>
            </li>
            <li className="list-group-item border-0">Office: {office}</li>
            <li className="list-group-item border-0">Phone: {phone}</li>
            <li className="list-group-item border-0">Fax: {fax}</li>
            <li className="list-group-item border-0">URL: {url}</li>
            <li className="list-group-item border-0">
              Official Contact Form: <a href={contact}>{contact}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row border-bottom-5 d-inline">
        <h6 className="d-inline align-self-center">Voting Stats:</h6>
        <p className="m-0 d-inline">Total Votes: {totalVotes}</p>
        <p className="m-0 d-inline">Votes Missed: {missedVotes}</p>
        <p className="m-0 d-inline">Missed Votes Pct: {missedVotesPct}%</p>
        <p className="m-0 d-inline">Votes with Party: {votesWParty}%</p>
      </div>
      <div className="row border-bottom-5">

      </div>
    </div>
  );
}

export default Dossier;
