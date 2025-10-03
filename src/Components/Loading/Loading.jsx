import React, { useEffect } from "react";
import "./Loading.css";

const Loading = ({ closeModal, onSave }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onSave) {
        onSave("Address saved successfully");
      }
      closeModal();
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onSave, closeModal]);

  return (
    <div className="loading-modal">
      <p className="loading-text">
        Please wait...<span className="dots">
          <span>.</span><span>.</span><span>.</span>
        </span>
      </p>
    </div>
  );
};

export default Loading;
