import React from 'react'
import "./Customer.css"

const Customer = () => {
  const items = [
    {
      id: 1,
      name: "Yetunde Atimgba",
      image: "/firstbite/Yetunde.jpg",
      quote: "My go-to breakfast every Monday. Fast and fresh!",
      rating: 4
    },
    {
      id: 2,
      name: "Chijide Chijioke",
      image: "/firstbite/Chijide.jpg",
      quote: "Finally, healthy breakfast that tastes great.",
      rating: 4
    },
    {
      id: 3,
      name: "Chisom Habeeb",
      image: "/firstbite/chisom.jpg",
      quote: "Saved me so many mornings when I was running late.",
      rating: 5
    },
    {
      id: 4,
      name: "Amara Habeeb",
      image: "/firstbite/Amara.jpg",
      quote: "Ordering before work has never been this easy!",
      rating: 5
    },
    {
      id: 5,
      name: "Kunle Habeeb",
      image: "/firstbite/Habeeb.jpg",
      quote: "Delivery was faster than expected!",
      rating: 4
    }
  ];

  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? "filled" : "empty"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="customer-container">
      <div className="customer-view">
        <p>What Our Customers Have to Say</p>
      </div>

  
      <div className="customer-row">
        {items.map((ele) => (
          <div className="customer-testimonials" key={ele.id}>
            <div
              className="customer-img"
              style={{
                backgroundImage: `url(${ele.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="customer-name">
              <p>{ele.name}</p>
            </div>

            <div className="customers-testimonies">
              <p>‘{ele.quote}’</p>
            </div>

            <div className="customers-rating">
              {renderStars(ele.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
