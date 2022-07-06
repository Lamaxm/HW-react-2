import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/Cards">Cards</Link>
      <Link to="/About">About</Link>
    </div>
  );
}

export default Header;