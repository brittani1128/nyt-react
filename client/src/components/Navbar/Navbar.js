import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <Link className="navbar-brand" to="/">
      Home
    </Link> */}
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/results"
            className={
              window.location.pathname === "/results"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Results
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/saved"
            className={
              window.location.pathname === "/saved"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Saved
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
