import React from "react";
import logo from "../assets/logo.png"; // Ensure you have a logo image in the assets folder

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Website Logo" className="navbar-logo" />
        <h2 className="navbar-title">Your Recipe Finder</h2>
      </div>
    </nav>
  );
}

export default Navbar;
