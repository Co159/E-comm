import React from 'react'
import Card from "../contents/Card";
import clo1 from "../images/clo-1.jpg";
import clo2 from "../images/clo-7.jpg";
import clo3 from "../images/clo-8.jpg";
import clo4 from "../images/clo-4.jpg";
import clo5 from "../images/clo-9.avif";
import clo6 from "../images/clo-10.jpg";

const Clothe = () => {
  return (
    <>
       <div className="container mb-4">
        <h3 className="mt-5 mb-3 ">Clothes Products</h3>
        <div className="row  flex-nowrap overflow-auto  " >
        <div className="col mb-3 mx-2">
            <Card
              imageSrc={clo1}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={clo2}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={clo3}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={clo4}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={clo5}
              textContent="Some dynamic text content here."
            />
          </div>
          <div className="col mb-3 mx-2">
            <Card
              imageSrc={clo6}
              textContent="Some dynamic text content here."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clothe
