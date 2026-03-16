import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <ul className="footer-links">
        <li>About</li>
        <li>Privacy</li>
        <li>Contact</li>
        <li>Terms</li>
      </ul>

      <div className="footer-bottom">
        <p>© 2026 MyBlog</p>

        <div className="social-links">
          <p>Facebook</p>
          <p>X</p>
          <p>Instagram</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;