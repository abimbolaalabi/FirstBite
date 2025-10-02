import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import "./Address.css";

const Address = ({ onSave, closeModal }) => {
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setDeliveryAddress(value);

    
    if (value.trim().length > 3) {
      onSave(value);
      closeModal(); 
    }
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const location = `Lat: ${latitude}, Lng: ${longitude}`;
          setDeliveryAddress(location);
          onSave(location);
          closeModal();
        },
        (err) => {
          console.error("Location error: ", err);
          alert("Unable to fetch location. Please enter manually.");
        }
      );
    }
  };

  return (
    <div className="delivery-modal">
      
      <button type="button" className="close-btn" onClick={closeModal}>
        <IoCloseOutline size={25} />
      </button>

      
      <h2>Enter Delivery Address</h2>
      <p>
        or{" "}
        <span className="use-location" onClick={handleUseLocation}>
          Use current location
        </span>
      </p>

      
      <div className="input-box">
        <span className="icon">
          <FiMapPin />
        </span>
        <input
          type="text"
          placeholder="Enter delivery address (e.g. Mile 2)"
          value={deliveryAddress}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Address;
