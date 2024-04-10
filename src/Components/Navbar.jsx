import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          onClick={() => setIsNavCollapsed(true)}
        >
          E-Comm
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold"
                aria-current="page"
                to="/"
                onClick={handleNavCollapse}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold"
                to="/about"
                onClick={handleNavCollapse}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold"
                to="/contact"
                onClick={handleNavCollapse}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold"
                to="/login"
                onClick={handleNavCollapse}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark fw-semibold"
                to="/register"
                onClick={handleNavCollapse}
              >
                Signup
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
