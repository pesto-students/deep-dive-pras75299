import React from "react";
import "./Login.css";
function Login() {
  return (
    <div>
      <div className="home-main">
        <div className="innerhome">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button type="button" className="btn btn-default">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
