import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="header-top">
      <nav>
        <ul>
          <li>
            <Link to="/feed"> Feed</Link>
          </li>
          <li>
            <Link to="/buzz"> Buzzwords</Link>
          </li>
          <li>
            <Link to="/profile"> Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
