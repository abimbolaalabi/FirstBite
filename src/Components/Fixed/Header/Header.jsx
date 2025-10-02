import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../Landing/Auth/Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const navigatetohome = () => {
    navigate("/");
    setActive("home");
    setIsOpen(false);
  };

  const navigatetomenu = () => {
    navigate("/newmenu");
    setActive("menu");
    setIsOpen(false);
  };

  const handlenavigate = () => {
    navigate("/contact");
    setActive("contact");
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
            <li
              onClick={navigatetohome}
              className={active === "home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={navigatetomenu}
              className={active === "menu" ? "active" : ""}
            >
              Menu
            </li>
            <li
              onClick={handlenavigate}
              className={active === "contact" ? "active" : ""}
            >
              Contacts
            </li>

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
