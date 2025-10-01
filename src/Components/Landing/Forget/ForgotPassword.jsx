import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./ForgotPassword.css";

const ForgotPassword = ({ closeModal, switchToVerify, switchToLogin }) => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ email: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    console.log("📧 Forgot Password Email:", formData.email);
    alert("Verification code sent to your email!");

    
    switchToVerify(formData.email);

    
    setFormData({ email: "" });
    setError("");
  };

  return (
    <form className="frm" onSubmit={handleSubmit}>
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IoCloseOutline
            size={24}
            style={{ cursor: "pointer" }}
            onClick={closeModal}
          />
        </div>

        <h3 className="login">Forgot Password</h3>
        <h4 className="login-to">
          Don’t worry, we’ll help you recover your account
        </h4>

        <div className="confirm-pass">
          <div className="pass">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <p className="error">{error}</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <button type="submit" className="btn1">
            Send verification code
          </button>
        </div>

        <p style={{ textAlign: "center", fontSize: "14px" }}>
          Remember password?{" "}
          <span
            style={{ color: "#ff7700", cursor: "pointer" }}
            onClick={switchToLogin}
          >
            Sign in
          </span>
        </p>
      </div>
    </form>
  );
};

export default ForgotPassword;