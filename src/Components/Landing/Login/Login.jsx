import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Login.css";

const Login = ({ closeModal, switchToSignUp, switchToForgot }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const validate = () => {
    let newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Login Data:", formData);
      alert("Login successful!");
      setFormData({ email: "", password: "" }); // reset after login
      closeModal();
    }
  };

  return (
    <form className="login_container" onSubmit={handleSubmit}>
      <div className="log">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IoCloseOutline size={25} onClick={closeModal} />
        </div>
        <h3 className="login">Login</h3>
        <h4 className="login_to">Login to continue</h4>
      </div>

      <div className="body">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
        <p className="error">{errors.email}</p>
      </div>

      <div className="psw">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
        <p className="error">{errors.password}</p>
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
        <button type="submit" className="log_atl_log">Login</button>
      </div>

      <p className="acct">
        New to FirstBite?{" "}
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
