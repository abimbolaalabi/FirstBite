import { IoCloseOutline } from "react-icons/io5";
import "./SignUp.css";

const SignUp = ({ closeModal, switchToLogin }) => {
  return (
    
      <form className="login_container">
        <div className="log">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IoCloseOutline size={25} onClick={closeModal} />
          </div>
          <h3 className="login">Sign Up</h3>
          <h4 className="login_to">Sign Up to continue</h4>
        </div>

        <div className="body">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" required />
        </div>

        <div className="body">
          <label>Phone Number</label>
          <input type="number" placeholder="+234" required />
        </div>

        <div className="psw">
          <label>Create Password</label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <div className="psw">
          <label>Re-enter Password</label>
          <input type="password" placeholder="Confirm password" required />
        </div>

        <div className="log_al">
          <button className="log_atl_log">Sign Up</button>
        </div>

        <p className="acct">
          Already have an account?{" "}
          <span
            style={{ color: "#ff7700", cursor: "pointer" }}
            onClick={switchToLogin}
          >
            Login here
          </span>
        </p>
      </form>
    
  );
};

export default SignUp;