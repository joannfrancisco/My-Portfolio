import "./Navbar.css";
import logo from "../assets/logo.svg";
import React, { useState } from "react";
import recruiter from "../assets/prof-recruiter.jpg";
import stalker from "../assets/prof-stalker.jpg";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = location.state || {};

  let avatar;
  if (profile === "Recruiter") {
    avatar = recruiter;
  } else if (profile === "Stalker") {
    avatar = stalker;
  } else {
    avatar = recruiter;
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Jo Ann Francisco logo" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links + Mobile Logo + Mobile Avatar */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <div className="mobile-logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Jo Ann Francisco logo" />
          </Link>
        </div>

        <li>
          <Link to="/home" state={{ profile }} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            state={{ profile }}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            state={{ profile }}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            state={{ profile }}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            state={{ profile }}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>

        {/* Mobile avatar */}
        <li className="mobile-avatar">
          <div onClick={() => navigate("/chooseprofile")}>
            <img src={avatar} alt={profile || "Default profile"} />
          </div>
        </li>
      </ul>

      {/* Desktop avatar */}
      <div
        className="avatar desktop-avatar"
        onClick={() => navigate("/chooseprofile")}
      >
        <img src={avatar} alt={profile || "Default profile"} />
      </div>
    </nav>
  );
}
