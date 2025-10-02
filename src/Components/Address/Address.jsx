import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import "./Address.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Address = ({ onSave, closeModal }) => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const userId = JSON.parse(sessionStorage.getItem("userId"));
  const navigate = useNavigate();
  // Handle manual address input and fetch suggestions
  const handleChange = async (e) => {
    const value = e.target.value;
    setDeliveryAddress(value);

    if (value.trim().length > 2) {
      setIsFetching(true);
      try {
        // Fetch address suggestions from Nominatim API
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1&limit=5`
        );
        const data = await response.json();
        console.log("Location Data:", data);
        const results = data.map((result) => result.display_name);
        setSuggestions(results);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      } finally {
        setIsFetching(false);
      }
    } else {
      setSuggestions([]); // Clear suggestions if input is too short
    }
  };

  const BaseUrl = `https://group2-firstbite-project.onrender.com/user/${userId}`;

  // Handle selecting an address from suggestions
  const handleSelectAddress = async (address) => {
    const deliveryAddress = address;
    try {
      const res = await axios.patch(BaseUrl, { deliveryAddress });
      toast.success("Address saved successfully!");
      navigate("/menu");
      closeModal();
    } catch (err) {
      console.log("this s the post error", err);
      // toast.error(err);
      setLoading(false);
    }
    setDeliveryAddress(address);
    // console.log("address", address);
    onSave(address); // Save the selected address
  };

  return (
    <div className="delivery-modal">
      <button
        type="button"
        className="close-btn"
        onClick={closeModal}
        aria-label="Close modal"
      >
        <IoCloseOutline size={25} />
      </button>

      <h2>Enter Delivery Address</h2>

      <div className="input-box">
        <span className="icon">
          <FiMapPin />
        </span>
        <input
          type="text"
          placeholder="Enter delivery address (e.g. Mile 2)"
          value={deliveryAddress}
          onChange={handleChange}
          aria-label="Delivery address input"
        />
      </div>

      {isFetching && <p>Fetching suggestions...</p>}

      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() => handleSelectAddress(suggestion)}
            className="suggestion-item"
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Address;
