import React from "react";

import "./RegisterStyle.css";
function Register() {
  return (
    <div className="container">
      <div className="register-container" id="register">
        <div className="two-forms">
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Firstname"
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Lastname" />
            <i className="bx bx-user"></i>
          </div>
        </div>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Email" />
          <i className="bx bx-envelope"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-box">
          <button>Register</button>
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="register-check" />
            <label htmlFor="register-check"> Remember Me</label>
          </div>
          <div className="two">
            <label>
              <a href="#">Terms & conditions</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
