import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className=" ">
      <footer className="text-center text-lg-start bg-light text-dark">
        <section className="d-flex justify-content-between p-4 bg-light text-dark">
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="/" className="text-dark me-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/" className="text-dark me-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" className="text-dark me-4">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="/" className="text-dark me-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/" className="text-dark me-4">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/" className="text-dark me-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>
        <hr />
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  E-comm PVT LTD.Our company is a registered in India under the
                  Companies Act, 1956 and having its Registered Office at No.
                  20.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Electronic Device
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Furniture
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Clothes
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Glosary
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Your Account
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                   Track Product
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3  mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <FontAwesomeIcon icon={faHome} /> New York, NY 10012, US
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> info@example.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> + 01 234 567 88
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />+ 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Copyright © 2024 : By E-comm.com
        </div>
      </footer>
    </div>
  );
};

export default Footer;
