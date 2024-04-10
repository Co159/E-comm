import React from "react";
import "./Card.css";

const Card = ({ imageSrc, textContent }) => {
  return (
    <>
      <div className="row mt-3">
        <div className="card" style={{ width: "18rem", height: "15rem" }}>
          <img src={imageSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{textContent}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
