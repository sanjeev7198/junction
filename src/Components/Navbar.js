import React from "react";
import logo from './junction-logo2.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src= {logo} alt="logo" id="sitelogo" width="150"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><i className="fas fa-bars text-white"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link btn active" aria-current="page" to="/signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn"
                  aria-current="page"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" to="/contactus">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
