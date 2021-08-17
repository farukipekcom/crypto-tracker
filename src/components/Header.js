import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="mailto:faruk@farukipek.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
