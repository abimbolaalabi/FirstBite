import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../Forget/ForgotPassword";
import Verify from "../../Verify/Verify";
import Address from "../../Address/Address";

const Modal = ({ closeModal }) => {
  const [view, setView] = useState("signup"); 

  const handleSaveAddress = (address) => {
    console.log("Saved delivery address:", address);
    closeModal(); 
  };

  return (
    <div className="modal">
      {view === "signup" && (
        <SignUp
          closeModal={closeModal}
          switchToVerify={() => setView("verify")}
          switchToLogin={() => setView("login")}
          switchToForgot={() => setView("forgot")}
        />
      )}

      {view === "login" && (
        <Login
          closeModal={closeModal}
          switchToSignUp={() => setView("signup")}
          switchToForgot={() => setView("forgot")}
        />
      )}

      {view === "forgot" && (
        <ForgotPassword
          closeModal={closeModal}
          switchToVerify={() => setView("verify")} 
          switchToAddress={() => setView("address")} 
        />
      )}

      {view === "verify" && (
        <Verify
          closeModal={closeModal}
          switchToAddress={() => setView("address")} 
        />
      )}

      {view === "address" && (
        <Address
          closeModal={closeModal}
          onSave={handleSaveAddress} 
        />
      )}
    </div>
  );
};

export default Modal;
