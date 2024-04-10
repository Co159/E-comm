import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { REGISTER_URL } from "../constant/api_url";
import { apiCall } from "../constant/api_Call";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "", 
  });

  const [error, setError] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    if (user.password !== user.confirmPassword) {
      setError({ confirmPassword: "Passwords do not match" });
      return;
    }

    let newError = {};

    if (!user.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newError.email = "Email is invalid";
    }

    if (!user.phone) {
      newError.phone = "Phone number is required";
    } else if (user.phone.length < 10) {
      newError.phone = "Phone number must be at least 10 characters long";
    }

    if (!user.password) {
      newError.password = "Password is required";
    } else if (user.password.length < 7) {
      newError.password = "Password must be at least 7 characters long";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    try {
      const response = await apiCall(REGISTER_URL, "POST", user);
      console.log("API Response:", response);
      const res_data = await response;
      storetokenInLS(res_data.token);
      setUser({ username: "", email: "", phone: "", password: "" });
      navigate("/login");
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <>
      <div className="container" id="loginForm">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <form onSubmit={handleSubmit}>
              <div className="login border shadow rounded p-4">
                <h2 className="text-center mb-4">Register</h2>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username...."
                    id="username"
                    name="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${error.email && 'is-invalid'}`}
                    placeholder="Enter your email...."
                    id="email"
                    name="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  {error.email && <div className="invalid-feedback">{error.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="Phone" className="form-label">
                    Phone no.
                  </label>
                  <input
                    type="text"
                    className={`form-control ${error.phone && 'is-invalid'}`}
                    placeholder="Enter your phone no...."
                    id="phone no"
                    name="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                  {error.phone && <div className="invalid-feedback">{error.phone}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password...."
                    className={`form-control ${error.password && 'is-invalid'}`}
                    id="password"
                    name="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                  {error.password && <div className="invalid-feedback">{error.password}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                   Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your same password...."
                    className={`form-control ${error.confirmPassword && 'is-invalid'}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    autoComplete="off"
                    value={user.confirmPassword}
                    onChange={handleInput}
                  />
                  {error.confirmPassword && <div className="invalid-feedback">{error.confirmPassword}</div>}
                </div>
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-submit btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;





