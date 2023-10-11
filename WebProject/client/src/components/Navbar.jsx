import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Links
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
