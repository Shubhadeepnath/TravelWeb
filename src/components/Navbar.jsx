import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menuitems } from "./Menuitems";
import "./Navbarstyle.css";

function Navbar() {
  //state = { clicked: false };
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked);
  };

  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i className="fa-solid fa-mountain-city"></i>TripuraQuest
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button >
            <Link className="signupbtn"  to="/signup">Log in</Link>
          </button>

          <button onClick={toggleLoginForm}>Upload</button>
        </ul>
        {showLoginForm && (
          <div className="login-form">
            <span className="close" onClick={toggleLoginForm}>
              &times;
            </span>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

/*import React, { Component } from "react";
import { Menuitems } from "./Menuitems";
import "./Navbarstyle.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">IyaaaaaaaaLAAAAA</h1>
        <ul className="nav-menu">
          <li></li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;*/
