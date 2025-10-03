import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Login.css";
import axios from "axios";
import toast from "react-hot-toast";

const Login = ({ closeModal, switchToSignUp, switchToForgot }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
      setLoading(false);
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      setLoading(false);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Replace with your real login endpoint
  const BaseUrl = "https://group2-firstbite-project.onrender.com/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (validate()) {
        const res = await axios.post(BaseUrl, formData);

        if (res?.data?.success) {
          sessionStorage.setItem("userId", JSON.stringify(res?.data?.data?._id));
          sessionStorage.setItem("token", JSON.stringify(res?.data?.token));
          toast.success(res?.data?.message || "Login successful!");

          setFormData({ email: "", password: "" });
          closeModal();
        } else {
          toast.error(res?.data?.message || "Login failed!");
        }
      }
    } catch (err) {
      console.log("Login error:", err);
      toast.error(err?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
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
        <button type="submit" className="log_atl_log" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
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
