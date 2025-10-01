import React, { useState } from "react";
import "./Profile.css";
import {
  MdShoppingCart,
  MdOutlineKeyboardArrowLeft,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FaRegUser, FaRegEdit } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline, IoCallOutline } from "react-icons/io5";
import ProfileDrop from "../Components/Dropdown/ProfileDrop";

const Profile = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="Profile_body">
      <div className="Profile_Container">
        <div className="Profile_wrapper">
          <div className="Profile_wrap1">
            <div className="Bite_logo">
              <p>FirstBite.</p>
            </div>

            <div className="Location_holder">
              <CiLocationOn className="location_icon" />
              <p>Mile 2, Blue Rail Train Station, Lagos Nigeria</p>
            </div>
          </div>
          <div className="Profile_wrap2">
            <div className="Input_holder_search">
              <div className="Input_search_container">
                <IoSearchOutline />
                <input
                  type="text"
                  placeholder="what would you like for breakfast?"
                />
              </div>
            </div>
            <div className="profile_cart_icon">
              <div className="cart_icon_holder">
                <div className="cart_icon">
                  <MdShoppingCart />
                </div>
                <div className="cart_count">
                  <span>0</span>
                </div>
              </div>
              <div className="profile_user_icon">
                <FaRegUser onClick={() => setDropDown(true)} />
              </div>
            </div>
          </div>
        </div>
        {dropDown && <ProfileDrop toclose={setDropDown} />}
      </div>

      <section className="Profile_page_body">
        <div className="Profile_wrapper_holder">
          <article className="profile_heading">
            <div className="go_to_menu">
              <MdOutlineKeyboardArrowLeft className="Go_menu" />
              <p>Go to Menu</p>
            </div>
            <div className="go_to_menu_profile">
              <h2>My Profile</h2>
            </div>
            <div className="go_to_menu"></div>
          </article>
          <aside className="Profile_input_holder">
            <div className="Profile_input_content">
              <div className="User_holder">
                <div className="User_info_container">
                  <div className="user_edit_holder">
                    <article className="User_edit_icon">
                      <FaRegUser />
                    </article>
                    <aside className="user_input_field_edit">
                      <label
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                          color: "#222222",
                        }}
                      >
                        Name
                      </label>
                      <input type="text" placeholder="uchechukwu evans" />
                    </aside>
                  </div>
                  <div className="user_edit_holder_icon">
                    <div className="edit_holder_container">
                      <FaRegEdit />
                    </div>
                  </div>
                </div>

                <div className="User_info_container">
                  <div className="user_edit_holder">
                    <article className="User_edit_icon">
                      <MdOutlineMailOutline />
                    </article>
                    <aside className="user_input_field_edit">
                      <label
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                          color: "#222222",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="uchechukwuevans@gmail.com"
                      />
                    </aside>
                  </div>
                  <div className="user_edit_holder_icon">
                    <div className="edit_holder_container">
                      <FaRegEdit />
                    </div>
                  </div>
                </div>

                <div className="User_info_container">
                  <div className="user_edit_holder">
                    <article className="User_edit_icon">
                      <IoCallOutline />
                    </article>
                    <aside className="user_input_field_edit">
                      <label
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                          color: "#222222",
                        }}
                      >
                        Phone Number
                      </label>
                      <input type="text" placeholder="+2349165700255" />
                    </aside>
                  </div>
                  <div className="user_edit_holder_icon">
                    <div className="edit_holder_container">
                      <FaRegEdit />
                    </div>
                  </div>
                </div>

                <div className="User_info_container">
                  <div className="user_edit_holder">
                    <article className="User_edit_icon">
                      <CiLocationOn />
                    </article>
                    <aside className="user_input_field_edit">
                      <label
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                          color: "#222222",
                        }}
                      >
                        Delivery Address
                      </label>
                      <input type="text" placeholder="uchechukwu evans" />
                    </aside>
                  </div>
                  <div className="user_edit_holder_icon">
                    <div className="edit_holder_container">
                      <FaRegEdit />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Profile_input_content"></div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Profile;
