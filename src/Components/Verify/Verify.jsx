import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Verify.css";

const Verify = ({ closeModal, switchToVerify }) => {
  const [formData, setFormData] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  const [error, setError] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = formData.code1 + formData.code2 + formData.code3 + formData.code4;

    if (code.length < 4) {
      setError("Please enter all 4 digits");
      return;
    }

    console.log("✅ Verification Code:", code);
    alert("Verification successful!");
    setFormData({ code1: "", code2: "", code3: "", code4: "" });
    setError("");
    closeModal();
  };

  return (
    <form className="frm" onSubmit={handleSubmit}>
      <div className="log">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IoCloseOutline size={25} onClick={closeModal} />
        </div>
        <h3 className="login">Verification</h3>
        <h4 className="login_to">
          A verification code has been sent to your email address <br />
          Please enter to continue
        </h4>

        <div className="pass">
          <input
            type="text"
            name="code1"
            value={formData.code1}
            onChange={handleChange}
            maxLength="1"
            required
          />
          <input
            type="text"
            name="code2"
            value={formData.code2}
            onChange={handleChange}
            maxLength="1"
            required
          />
          <input
            type="text"
            name="code3"
            value={formData.code3}
            onChange={handleChange}
            maxLength="1"
            required
          />
          <input
            type="text"
            name="code4"
            value={formData.code4}
            onChange={handleChange}
            maxLength="1"
            required
          />
        </div>
        <p className="error">{error}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                 <button onClick={switchToVerify} type="submit" className="btn1">
                     Verify
                    </button>
                     
                    <p style={{ textAlign: "center", fontSize: "14px" }}>
                         Resend Code in{" "}
                     <span style={{ color: "black", cursor: "pointer" }}>01:59</span>
                     </p>
            </div>

      </div>
    </form>
  );
};

export default Verify;
