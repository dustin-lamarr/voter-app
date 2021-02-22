import React from "react";

function Image() {
  return (
    <div className="col-4">
      <img
        className="img-thumbnail"
        style={{ height: 100, width: 100 }}
        src="/images/voter-sq.png"
        alt="voter"
      ></img>
    </div>
  );
}

export default Image;
