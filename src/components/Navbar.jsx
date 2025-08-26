import React from "react";
import "../App.css"; // Ensures navbar styles are loaded

const Navbar = ({ goToPage }) => {
  return (
    <nav className="navbar">
      <button onClick={() => goToPage(0)}>Home</button>
      <button onClick={() => goToPage(1)}>About</button>
      <button onClick={() => goToPage(2)}>Skills</button>
      <button onClick={() => goToPage(3)}>Projects</button>
      <button onClick={() => goToPage(4)}>Contact</button>
    </nav>
  );
};

export default Navbar;
