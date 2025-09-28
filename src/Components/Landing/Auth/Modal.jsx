import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


const Modal = ({ closeModal }) => {
  const [view, setView] = useState("login"); 
  

  return (
    <div className="modal">
      {view === "login" && (
        <Login
          closeModal={closeModal}
          switchToSignUp={() => setView("signup")}
          switchToForgot={() => setView("forgot")}
        />
      )}
      {view === "signup" && (
        <SignUp
          closeModal={closeModal}
          switchToLogin={() => setView("login")}
        />
      )}
      {view === "forgot" && (
        <ForgotPassword
          closeModal={closeModal}
          switchToLogin={() => setView("login")}
        />
      )}
    </div>
  );
};

export default Modal;