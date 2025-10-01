import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = ({ closeModal, switchToSignUp, switchToForgot }) => {
  return (
    
      <form className="login_container">
        <div className="log">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IoCloseOutline size={25} onClick={closeModal} />
          </div>
          <h3 className="login">Login</h3>
          <h4 className="login_to">Login to continue</h4>
        </div>

        <div className="body">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="psw">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <p className="fpsw">
          Forgotten password?{" "}
          <span
            style={{ color: "#ff7700", cursor: "pointer" }}
            onClick={switchToForgot}
          >
            Click here
          </span>
        </p>

        <div className="log_al">
          <button className="log_atl_log">Login</button>
          <div className="divider">
            <span>or</span>
          </div>
          <button
            className="btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <FcGoogle size={25} /> Sign in with Google
          </button>
        </div>

        <p className="acct">
          Don’t have an account?{" "}
          <span
            style={{ color: "#ff7700", cursor: "pointer" }}
            onClick={switchToSignUp}
          >
            Create an account
          </span>
        </p>
      </form>

  );
};

export default Login;