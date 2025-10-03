import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import "./Header.css";

const MenuHeader = ({
  user,
  toggleDropdown,
  isDropdownVisible,
  closeDropdown,
}) => {
  return (
    <div className="menu_Container">
      <div className="menu_wrapper">
        <div className="menu_wrap1">
          <div className="Bite_logo">
            <p>FirstBite.</p>
          </div>

          <div className="Location_holder">
            <CiLocationOn className="location_icon" />
            <p>{user?.deliveryAddress || "No Address Set"}</p>
          </div>
        </div>

        <div className="menu_wrap2">
          <div className="Input_holder_search">
            <div className="Input_search_container">
              <IoSearchOutline />
              <input
                type="text"
                placeholder="What would you like for breakfast?"
              />
            </div>
          </div>

          <div className="menu_cart_icon">
            <div className="cart_icon_holder">
              <div className="cart_icon">
                <MdShoppingCart />
              </div>
              <div className="cart_count">
                <span>0</span>
              </div>
            </div>
            <div className="menu_user_icon" onClick={toggleDropdown}>
              <FaRegUser />
              {isDropdownVisible && (
                <>
                  <div
                    className="profile-dropdown-overlay"
                    onClick={closeDropdown}
                  ></div>
                  <div className="profile-dropdown">
                    <p>Profile</p>
                    <p>Order History</p>
                    <p>Logout</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
