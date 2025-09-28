import React from "react";
import "./Footer.css"; 
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
       <div className='footer-logo'>
            <p>FirstBite.</p>
        </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">FAQ/Help Centre</a>
          <a href="#">Privacy Policy</a>
          <a href="#">WhatsApp chat</a>
          <a href="#">Zones we cover</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms of Service</a>
          <a href="#">Email Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyrights 2025 © FirstBite in Lagos Nigeria</p>
        <div className="footer-socials">
          <a href="#"><CiFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
