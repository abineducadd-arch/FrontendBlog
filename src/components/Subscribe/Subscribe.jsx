import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-section">

      <h2>Subscribe to Our Newsletter</h2>
      <p>Get the latest updates and news.</p>

      <form className="subscribe-form">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Subscribe
        </button>

      </form>

    </div>
  );
};

export default Subscribe;