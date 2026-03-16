import React, { useState } from "react";
import API from "../../data/axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("api/v1/token/", formData);

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      console.log(error.response?.data);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="login-form">

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />

          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="google-login">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const res = await API.post("api/v1/google_login/", {
                  token: credentialResponse.credential,
                });

                localStorage.setItem("access", res.data.access);
                localStorage.setItem("refresh", res.data.refresh);

                alert("Google Login Successful");
                navigate("/");
              } catch (err) {
                console.log(err);
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

      </div>

    </div>
  );
};

export default Login;