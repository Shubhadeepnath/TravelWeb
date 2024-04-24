import { Link } from "react-router-dom";

import "./Signup.css";

function Signup() {
  const handleSignUpClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="form-box">
      <div className="login-container" id="login">
        <div className="toptop">
          <span>
            Don't have an account?
            <Link to="/register">
              <button className="btn2">Sign Up</button>
            </Link>
          </span>

          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Username or Email"
            />
            <i className="bx bx-user"></i>
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
            <button className="btn2" href="/" onClick={handleSignUpClick}>
              Log in
            </button>
          </div>

          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Rememeber Me</label>
            </div>
            <div className="two">
              <label>
                <a href="./">Forgot password?</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
