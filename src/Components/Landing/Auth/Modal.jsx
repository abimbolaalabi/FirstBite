import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../Forget/ForgotPassword";
import Verify from "../../Verify/Verify";
import Address from "../../Address/Address";
import Loading from "../../Loading/Loading"; 

const Modal = ({ closeModal }) => {
  const [view, setView] = useState("signup"); 
  const [address, setAddress] = useState("");

  const handleSaveAddress = (value) => {
    setAddress(value);
    setView("loading");
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

      {view === "loading" && (
        <Loading
          onSave={(msg) => {
            console.log("Saved delivery address:", address, msg);
          }}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Modal;
