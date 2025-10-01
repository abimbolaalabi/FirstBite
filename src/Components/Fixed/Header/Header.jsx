import React, { useState } from "react";
import "./Header.css";
import Login from "../../Landing/Login/Login";
import { useNavigate } from "react-router-dom";
import Modal from "../../Landing/Auth/Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // <-- state for menu toggle

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/contact");
    setIsOpen(false); 
  };

  const navigatetomenu = () => {
    navigate("/newmenu");
    setIsOpen(false);
  };

  const navigatetohome = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-wrapper">
        
        <div className="header-logo">
          <p>FirstBite.</p>
        </div>

        
        <div className={`header-list ${isOpen ? "open" : ""}`}>
          <ul>
            <li onClick={navigatetohome}>Home</li>
            <li onClick={navigatetomenu}>Menu</li>
            <li onClick={handlenavigate}>Contacts</li>
            
            <li className="mobile-btn">
              <button className="button_header" onClick={openModal}>
                Get Started
              </button>
            </li>
          </ul>
        </div>

        
        <button className="button_header desktop-btn" onClick={openModal}>
          Get Started
        </button>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {modal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Header;
