import React from "react";
import "./Deliver.css";
const Deliver = () => {
  const locationsData = [
    {
      axis: "Ikeja Axis",
      places: ["Ikeja GRA", "Maryland", "Opebi", "Allen Avenue", "Ogba"],
    },
    {
      axis: "Yaba / Surulere Axis",
      places: ["Yaba", "Surulere", "Ojuelegba", "Akoka", "Tejuosho"],
    },
    {
      axis: "Mainland Central",
      places: ["Mushin", "Ilupeju", "Anthony Village", "Palmgrove"],
    },
    {
      axis: "Other Key Spots",
      places: ["Gbagada", "Shomolu", "Bariga", "Oshodi"],
    },
  ];
  return (
    <div className="delivery-container">
      <h1>Where We Deliver</h1>
      <div className="delivery-wrapper">
        <img src="/firstbite/map.png" alt="" />
        <div className="delivery-locations">
          {locationsData.map((group, index) => (
            <div key={index} className="location-group">
              <h3 className="axis-title">{group.axis}</h3>
              <ul className="places-list">
                {group.places.map((place, idx) => (
                  <li key={idx} className="place-item">
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deliver;
