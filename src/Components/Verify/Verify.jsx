import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import "./Verify.css";
import toast from "react-hot-toast";

const Verify = ({ closeModal, switchToAddress }) => {
  const [formData, setFormData] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const BaseUrl = `https://group2-firstbite-project.onrender.com/verify/${token}`;
  console.log(BaseUrl);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCode();
  };

  const verifyCode = async () => {
    const otp =
      formData.code1 + formData.code2 + formData.code3 + formData.code4;
    console.log(otp);

    if (otp.length < 4) {
      setError("Please enter all 4 digits");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(BaseUrl, { otp });
      console.log("Verification successful:", response.data);
      toast.success(response?.message || "Verification successful!");
      switchToAddress();
      setError("");
      setFormData({ code1: "", code2: "", code3: "", code4: "" });
      // closeModal();
    } catch (err) {
      setLoading(false);
      console.error("Error verifying code:", err);
      toast.error(
        err.response?.data?.message ||
          "An error occurred. Please try again later."
      );
      // setError(
      //   err.response?.data?.message ||
      //     "An error occurred. Please try again later."
      // );
    }
  };

  return (
    <form className="frm" onSubmit={handleSubmit}>
      <div className="box">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IoCloseOutline size={25} onClick={closeModal} />
        </div>
        <h3 className="verify">Verification</h3>
        <h4 className="verify1">
          A verification code has been sent to your email address <br />
          Please enter to continue
        </h4>

        <div className="codes_box">
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
        {/* <p className="error">{error}</p> */}

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <button type="submit" className="btn1">
            {loading ? "Verifying..." : "Verify"}
          </button>

          <p style={{ textAlign: "center", fontSize: "14px" }}>
            Resend Code in{" "}
            <span
              style={{ color: "black", cursor: "pointer", fontWeight: "600" }}
            >
              01:59
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Verify;
