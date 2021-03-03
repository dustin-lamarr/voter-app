import React from "react";

function Navpane(props) {
  const styles = {
    linkButton: {
      color: "#001839",
    },
  };
  return (
    <nav className="nav flex-column list-group py-3">
      <a
        className="btn nav-link list-group-item list-group-item-action border-0 h6"
        name="feds"
        aria-current="page"
        type="button"
        style={styles.linkButton}
        href="/dashboard/feds"
      >
        Federal Legislators
      </a>
      <a
        className="btn nav-link list-group-item list-group-item-action border-0 h6"
        aria-current="page"
        type="button"
        style={styles.linkButton}
        href="/dashboard/state"
      >
        State Legislators
      </a>
      <a
        className="btn nav-link list-group-item list-group-item-action border-0 h6"
        aria-current="page"
        type="button"
        style={styles.linkButton}
        href="/dashboard/municipal"
      >
        Municipal Legislators
      </a>
    </nav>
  );
}

export default Navpane;
