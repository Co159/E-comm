import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { LOGIN_URL } from "../constant/api_url";
import { apiCall } from "../constant/api_Call";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
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
    try {
      let newError = {};
      if (!user.email) {
        newError.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        newError.email = "Email is invalid";
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

      const response = await apiCall(LOGIN_URL, "POST", user);
      console.log("API Response:", response);
      const res_data = await response;
      storetokenInLS(res_data.token);
      setUser({ email: "", password: "" });
      alert("Login Successfully");
      navigate("/");
    } catch (error) {
      console.error("Error Login: ", error);
      alert("Invalid credential");
    }
  };

  return (
    <div className="container" id="loginForm">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <form onSubmit={handleSubmit}>
            <div className="login border shadow rounded p-4">
              <h2 className="text-center mb-4">Log in</h2>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className={`form-control ${error.email && 'is-invalid'}`}
                  placeholder="Enter your email...."
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
                {error.email && <div className="invalid-feedback">{error.email}</div>}
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

              <div className="text-center">
                <button type="submit" className="btn btn-submit btn-primary">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;







