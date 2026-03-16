import React, { useState } from "react";
import API from "../../data/axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
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
      await API.post("api/v1/register/", formData);

      alert("Register Successful");
      navigate("/login");

    } catch (error) {
      console.log(error.response?.data);
      alert("Register Failed");
    }
  };

  return (
    <div className="register-container">

      <div className="register-card">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit} className="register-form">

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

        <p className="login-link">
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>

      </div>

    </div>
  );
};

export default Register;