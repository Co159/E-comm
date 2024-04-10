import React from "react";
import laptop from "../images/lap-5.jpg";
import Clothes from "../images/Clothes.jpg";
import Furniture from "../images/Furniture.jpg";
import './Slider.css'

const Slider = () => {
  

  return (
   <>
    <div id="demo" className="carousel slide " data-bs-ride="carousel">
      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Furniture} alt="Los Angeles" className="d-block " style={{ width: '100%',height:'100%' }} />
        </div>
        <div className="carousel-item">
          <img src={Clothes} alt="Chicago" className="d-block" style={{ width: '100%' ,height:'100%' }} />
        </div>
        <div className="carousel-item">
          <img src={laptop} alt="New York" className="d-block" style={{ width: '100%' ,height:'100%' }} />
        </div>
      </div>

      {/* Left and right controls/icons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
   </>
  );
};

export default Slider;
