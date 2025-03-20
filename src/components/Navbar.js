import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyles = {
    backgroundColor: "#007bff",
    padding: "10px",
  };

  const ulStyles = {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li><Link to="/" style={linkStyles}>Home</Link></li>
        <li><Link to="/profile/Bret" style={linkStyles}>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;