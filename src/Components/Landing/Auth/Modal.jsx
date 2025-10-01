import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../Forget/ForgotPassword";
import Verify from "../../Verify/Verify";



const Modal = ({ closeModal }) => {
  const [view, setView] = useState("signup"); 
  

  return (
    <div className="modal">
      {view === "signup" && (
        <SignUp
          closeModal={closeModal}
          switchToLogin={() => setView("login")}
          switchToForgot={() => setView("forgot")}
        />
      )}
      {view === "login" && (
        <Login
          closeModal={closeModal}
          switchToSignUp={() => setView("signup")}
          switchToForgot={()=> setView("forgot")}
        />
      )}
      {view === "forgot" && (
         <ForgotPassword
         closeModal={closeModal}
         switchToVerify={() => setView("verify")} 
         switchToLogin={() => setView("login")}
      />
      )}

      {view === "verify" && (
        <Verify
        closeModal={closeModal} 
        switchToVerify={()=> setView("verify")}
        />
      )}
    </div>
  );
};

export default Modal;