import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import './ForgotPassword.css'

const ForgotPassword = ({ closeModal, switchToVerify }) => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState("");

  
  const handleChange = (e) => {
    setFormData({ email: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    console.log("📩 Forgot Password Email:", formData.email);
    alert("Verification code sent to your email!");
    setFormData({ email: "" }); 
    setError("");
  };

  return (
    <form className="frm" onSubmit={handleSubmit}>
      <div className="log">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IoCloseOutline size={25} onClick={closeModal} />
        </div>
        <h3 className="login">Forgot password</h3>
        <h4 className="login_to">
          Don't worry, we'll help you recover your account
        </h4>
      </div>

      <div className="confirm-pass">
        <div className="pass">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
          <p className="error">{error}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <button onClick={switchToVerify} type="submit" className="btn1">
            Send verification code
          </button>
          <p style={{ textAlign: "center", fontSize: "14px" }}>
            Remember password?{" "}
            <span
              
              style={{ color: "#ff7700", cursor: "pointer" }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
