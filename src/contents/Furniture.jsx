import React from "react";
import Card from "../contents/Card";
import sofa from "../images/sofa.webp";
import chari2 from "../images/2-chair.jpg";
import bed from "../images/bed.jpg";
import chair from "../images/chair.jpg";
import chail from "../images/chair-l.jpg";
import dynnig from "../images/Dynig.jpg";

const Furniture = () => {
  return (
    <>
      <div className="container">
        <h3 className="mt-4">Furniture Products</h3>
        <div className="row  flex-nowrap overflow-auto">
          <div className="col mb-3 mx-2 ">
            <Card
              imageSrc={sofa}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={chari2}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={dynnig}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={chair}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={bed}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={chail}
              textContent="Some dynamic text content here."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Furniture;
