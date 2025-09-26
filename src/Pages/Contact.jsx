import React from "react";
import "./Contact.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact_container">
      <div className="Contact_Wrapper">
        <div className="Contact_header">
          <aside className="Contact_header_wrapper">
            <h1 className="Page_heading">Contact Us</h1>
            <p className="Body_text">
              Please do not hesitate to reach out to us whenever you need
              assistance. We will make sure to respond to you promptly
            </p>
          </aside>
        </div>

        <article className="Contact_form_container">
          <div className="Form_container">
            <div className="Name_input">
              <label className="Input_label">Name</label>
              <input type="text" placeholder="input" />
            </div>

            <div className="Name_input">
              <label className="Input_label">
                Email address <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" placeholder="example@email.com" />
            </div>

            <div className="Name_input">
              <label className="Input_label">Subject</label>
              <input
                type="text"
                placeholder="e.g. General enquiry, Order support, Feedback"
              />
            </div>
          </div>

          <div className="Contact_info_container">
            <div className="Contact_info_wrapper">
              <h1
                style={{
                  height: "30px",
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "125%",
                  letterSpacing: "0",
                  fontFamily: "Montserrat",
                  color: "#121212",
                }}
              >
                Get in Touch
              </h1>
              <div className="Contact_info_holder">
                <p>
                  For inquiries, Custom orders, or more information about our
                  products and services, feel free to contact us:
                </p>
                <ul style={{ marginLeft: "30px" }}>
                  <li>Address: Lagos State</li>
                  <li>Phone: 08092284276, 07017729810</li>
                  <li>Email: FirstBite@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <aside className="socials">
          <div className="Socials_follow">
            <p>Follow Us On</p>
          </div>
        </aside>

        <div className="Message_container">
          <div className="Message_input_holder">
            <div className="text_area_holder">
              <label>Message</label>
              <textarea name="" id="" placeholder="input"></textarea>
            </div>
            <div className="Btn_area">
              <button>Send Message</button>
            </div>
          </div>

          <article className="social_media_holder">
            <div className="Social_media_wrapper">
              <CiFacebook className="Media_icon_img" />
              <FaInstagram className="Media_icon_img" />
              <FaWhatsapp className="Media_icon_img" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Contact;
