import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
    const nav = useNavigate()
    function handleClick(event){
        const classNames = event.target.className.split(' ');
        const className = classNames.find((name) => name === "Home")
        if(className){
            nav("/home");
        }
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link Home" onClick={handleClick}>
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
