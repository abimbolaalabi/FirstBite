import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrderSummary.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import NewHeader from "../Components/NewHeader/NewHeader";

const OrderSummary = () => {
  const [cart, setCart] = useState([]);
  const userId = JSON.parse(sessionStorage.getItem("userId"));

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `https://group2-firstbite-project.onrender.com/cart/${userId}`
      );
      setCart(response.data.cart || []);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="Summary_container">
    
      <div className="Summary_wrapper">
          {/* <NewHeader/> */}
        <div className="Summary_heading">
          <div className="Order_sum_icon" onClick={() => window.history.back()}>
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className="Order_sum_text">
            <h1>Order Summary</h1>
          </div>
          <div className="Order_sum_text"></div>
        </div>

        <article className="Summary_content_holder">
          <div className="Summary_content">
            <h4>Are you done ordering?</h4>
            <div className="Summary_input">
              <label htmlFor="">Add a note for the kitchen[Optional]</label>
              <textarea type="text" placeholder="Any allergies?" />
            </div>
            <div className="Summary_input_delivery">
              <label htmlFor="">Delivery Instructions</label>
              <textarea type="text" placeholder="input" />
            </div>
            <aside className="Summary_address">
              <h4>Delivery Address</h4>
              <div className="Summary_info_container">
                <div className="Summary_edit_holder">
                  <article className="Summary_edit_icon">
                    <CiLocationOn />
                  </article>
                  <aside className="summary_input_field_edit">
                    <input
                      type="text"
                      placeholder="Mile 2 , Blue Rail Train Station, Lagos Nigeria"
                    />
                  </aside>
                </div>
                <div className="Summary_edit_holder_icon">
                  <div className="Summary_edit_holder_container">
                    <FaRegEdit />
                  </div>
                </div>
              </div>

              <div className="Summary_info_container">
                <div className="Summary_edit_holder">
                  <article className="Summary_edit_icon">
                    <LuPhoneCall />
                  </article>
                  <aside className="summary_input_field_edit">
                    <input type="text" placeholder="09164700255" />
                  </aside>
                </div>
                <div className="Summary_edit_holder_icon">
                  <div className="Summary_edit_holder_container">
                    <FaRegEdit />
                  </div>
                </div>
              </div>
              <div></div>
            </aside>
          </div>

          <div className="Summary_content_2">
            <div className="Confirm_order_container">
              <h1>Confirm your Order</h1>
              <div className="Confirm_order_content">
                <article className="Confirm_fee">
                  <h4>2 products</h4>
                  <div className="Confirm_food">
                    <div className="Food_pricing">
                      <p>pap and akara(bean cake)</p>
                    </div>
                    <div className="Food_pricing_1">
                      <p>NGN1,800</p>
                    </div>
                  </div>
                  <div className="Confirm_food">
                    <div className="Food_pricing">
                      <p>A bottle of water</p>
                    </div>
                    <div className="Food_pricing_1">
                      <p>fee</p>
                    </div>
                  </div>
                  <div className="Confirm_food">
                    <div className="Food_pricing">
                      <p>Delivery fee</p>
                    </div>
                    <div className="Food_pricing_1">
                      <p>NGN1000</p>
                    </div>
                  </div>
                </article>
                <div className="Confirm_total">
                  <div className="Total_pricing">
                    <p>TOTAL</p>
                  </div>
                  <div className="Total_pricing_1">
                    <p>NGN2,800</p>
                  </div>
                </div>
              </div>
              <article className="Confirm_delivery_text">
                <p>
                  Delivery usually take 20-40 minuites. We care about <br />
                  your meal so all delivery is treated as priority. Your
                  <br /> location was used to help us calculate your delivery
                  fee.
                </p>
              </article>
              <div className="Confirm_btn">
                <button>Continue to Payment</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderSummary;
