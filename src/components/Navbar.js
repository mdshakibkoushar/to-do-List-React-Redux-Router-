import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/Todo">Todo</Link>
      </button>
    </div>
  );
};

export default Navbar;
