import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Product from "../contents/Product";
import imgp from "../images/imgp.png";
import imgg from "../images/imgg.png";
import Team from "../contents/Team";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardabout from "../contents/Cardabout";

const About = () => {
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(calculateSlidesToShow());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateSlidesToShow() {
    if (window.innerWidth > 1200) {
      return 4;
    } else if (window.innerWidth > 991) {
      return 3;
    } else if (window.innerWidth > 576) {
      return 2;
    } else {
      return 1;
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const settingsr = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
  };

  return (
    <>
      <div className="container mb-4">
        <br />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div >
            <h2 className="text-center mt-4 mb-3">Our Services</h2>
            <div style={{width: "95%",
    margin: "0 7px"}}>
            <Slider {...settings}>
              <div className="my-3 mx-2">
                <Cardabout
                  title="Dynamic Card Title"
                  text="This is dynamic content for the card. You can customize it as needed."
                />
              </div>
              <div className="my-3 mx-2">
                <Cardabout
                  title="Dynamic Card Title"
                  text="This is dynamic content for the card. You can customize it as needed."
                />
              </div>
              <div className="my-3 mx-2">
                <Cardabout
                  title="Dynamic Card Title"
                  text="This is dynamic content for the card. You can customize it as needed."
                />
              </div>
              <div className="my-3 mx-2">
                <Cardabout
                  title="Dynamic Card Title"
                  text="This is dynamic content for the card. You can customize it as needed."
                />
              </div>
            </Slider>
            </div>
          </div>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Product />
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center my-3">Our Team</h2>
<div style={{width: "95%",
    margin: "0 7px"}}>
          <Slider {...settingsr}>
            <div className="col mb-3 mx-2">
              <Team src={imgp} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgg} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgp} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgg} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgp} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgg} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgp} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgg} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgp} />
            </div>
            <div className="col mb-3 mx-2">
              <Team src={imgg} />
            </div>
          </Slider>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
