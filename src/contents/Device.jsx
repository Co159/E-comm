import React from "react";
import Card from "../contents/Card";
import lap1 from "../images/lap-5.jpg";
import lap2 from "../images/lap-1.jpg";
import lap3 from "../images/lap-2.jpg";
import lap4 from "../images/lap-3.jpg";
import lap5 from "../images/lap-4.jpeg";
import lap6 from "../images/lapt.jpg";

const Device = () => {
  return (
    <>
      <div className="container">
        <h3 className="mt-4">Laptop Products</h3>
        <div className="row  flex-nowrap overflow-auto">
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={lap1}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={lap2}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={lap3}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={lap4}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={lap5}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={lap6}
              textContent="Some dynamic text content here."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Device;
