import React, { useState } from 'react'
import "./NewHeader.css"
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
const NewHeader = () => {
      const [user, setUser] = useState(null);
       const [cart, setCart] = useState([])
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
                  <span>{cart.length}</span>
                </div>
              </div>
              <div className="menu_user_icon">
                <FaRegUser />
                <div className="profile-dropdown"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NewHeader
