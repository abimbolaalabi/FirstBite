import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./SignUp.css";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = ({ closeModal, switchToVerify, switchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
      setLoading(false);
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
      setLoading(false);
    }
    if (!/^[0-9]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone must be numbers only";
      setLoading(false);
    } else if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Phone must be at least 10 digits";
      setLoading(false);
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      setLoading(false);
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
      setLoading(false);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const BaseUrl = "https://group2-firstbite-project.onrender.com/signUp";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (validate()) {
        const res = await axios.post(BaseUrl, formData);
        switchToVerify();
        console.log("this s the res", res);
        sessionStorage.setItem("userId", JSON.stringify(res?.data?.data?._id));
        sessionStorage.setItem("token", JSON.stringify(res?.data?.token));
        toast.success(res?.data?.message);

        // console.log("✅ Sign Up Data:", formData);
        // alert("Sign up successful!");
        // closeModal();
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      console.log("this s the post error", err);
      toast.error(err?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <form className="login_container" onSubmit={handleSubmit}>
      <div className="log">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IoCloseOutline size={25} onClick={closeModal} />
        </div>
        <h3 className="login">Sign Up</h3>
        <h4 className="login_to">Sign Up to continue</h4>
      </div>

      <div className="body">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Enter your Full Name"
          onChange={handleChange}
          required
        />
        <p className="error">{errors.fullName}</p>
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

      <div className="body">
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="+234"
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/d, "");
            setFormData((p) => {
              return { ...p, phoneNumber: digits };
            });
          }}
          required
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>

      <div className="psw">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={handleChange}
          required
        />
        <p className="error">{errors.password}</p>
      </div>

      <div className="psw">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
          required
        />
        <p className="error">{errors.confirmPassword}</p>
      </div>

      <div className="log_al">
        <button type="submit" className="log_atl_log" disabled={loading}>
          {loading ? "Loading..." : " Sign Up"}
        </button>
      </div>

      <p className="acct">
        Already have an account?{" "}
        <span
          style={{ color: "#ff7700", cursor: "pointer" }}
          onClick={switchToLogin}
        >
          Sign in
        </span>
      </p>
    </form>
  );
};

export default SignUp;
