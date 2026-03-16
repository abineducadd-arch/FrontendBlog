import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="auth-navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      {!isLoggedIn && (
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      )}

      {isLoggedIn && (
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;