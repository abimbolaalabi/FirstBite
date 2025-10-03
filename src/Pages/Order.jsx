import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Order.css";

const Order = () => {
  const [ratings, setRatings] = useState({});

  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const [orders] = useState([
    {
      id: 1247,
      time: "8:20 AM",
      title: "Pap & Akara (Bean Cake)",
      price: 2200,
      status: "confirmed",
      active: true,
      image: "food.jpg",
    },
    {
      id: 1246,
      time: "Yesterday, 9:15 AM",
      title: "Pancakes with Honey",
      price: 1200,
      status: "delivered",
      active: false,
      image: "pancakes.jpg",
    },
    {
      id: 4,
      title: "Indomie & Fried Egg",
      date: "September 15, 8:45 AM",
      price: 1200,
      active: false,
      image: "indomie.jpg",
    },
    {
      id: 5,
      title: "Pap & Akara",
      date: "September 14, 10:20 AM",
      price: 1200,
      active: false,
      image: "pap.jpg",
    },
  ]);

  const activeOrders = orders.filter((o) => o.active);
  const previousOrders = orders.filter((o) => !o.active);

  return (
    <div className="order-history">
      <a href="/" className="back-link">
        {"< Go to Menu"}
      </a>
      <h2 className="title">Order History</h2>
      <section>
        <h3>Active Orders</h3>
        {activeOrders.map((order) => (
          <div className="order-card active" key={order.id}>
            <div className="order-left">
              <img src={order.image} alt={order.title} />
              <div className="order-details">
                <h4>Order #{order.id}</h4>
                <p>{order.time}</p>
                <p>{order.title}</p>
              </div>
            </div>
            <div className="order-right">
              <span className="price">NGN{order.price.toLocaleString()}</span>
            </div>

            <div className="progress-bar">
              <div
                className={`progress-step ${
                  order.status === "confirmed" ? "active" : ""
                }`}
              >
                Confirmed
              </div>
              <div
                className={`progress-step ${
                  order.status === "on-the-way" ? "active" : ""
                }`}
              >
                On its way
              </div>
              <div
                className={`progress-step ${
                  order.status === "delivered" ? "active" : ""
                }`}
              >
                Delivered
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h3>Previous Orders</h3>
        {previousOrders.map((order) => (
          <div className="order-card previous" key={order.id}>
            <div className="order-left">
              <img src={order.image} alt={order.title} />
              <div className="order-details">
                <h4>{order.title}</h4>
                <p>{order.date || order.time}</p>
                <p>NGN{order.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="order-right">
              <button className="reorder-btn">Re-order</button>
              <div className="rating-section">
                {ratings[order.id] ? (
                  <p className="already-rated">Already rated</p>
                ) : (
                  <p className="rate-text">Rate this order:</p>
                )}
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={18}
                      color={
                        star <= (ratings[order.id] || 0) ? "#ff7a00" : "#ccc"
                      }
                      onClick={() => handleRating(order.id, star)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Order;
