import React from "react";

const Team = ({ src }) => {
  return (
    <>
      <div className="card my-4 shadow " style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={src}
          alt=""
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
        </div>
      </div>
    </>
  );
};

export default Team;
