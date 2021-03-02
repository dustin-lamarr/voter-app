import React from "react";

function Navpane({ onClick }) {
  const styles = {
    linkButton: {
      color: "#001839",
    },
  };
  return (
    <nav className="nav flex-column list-group py-3">
      <button
        className="nav-link list-group-item list-group-item-action border-0 h6"
        aria-current="page"
        type="button"
        style={styles.linkButton}
        onClick={(event) => onClick(event)}
      >
        Federal Legislators
      </button>
      <button
        className="nav-link list-group-item list-group-item-action border-0 h6"
        aria-current="page"
        type="button"
        style={styles.linkButton}
        onClick={(event) => onClick(event)}
      >
        State Legislators
      </button>
      <button
        className="nav-link list-group-item list-group-item-action border-0 h6"
        aria-current="page"
        type="button"
        style={styles.linkButton}
        onClick={(event) => onClick(event)}
      >
        Municipal Legislators
      </button>
    </nav>
  );
}

export default Navpane;
