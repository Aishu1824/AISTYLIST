import React, { useState } from "react";
import "./content4.css"; 

const Content = () => {
  const [items, setItems] = useState([
    { name: "Jacket", imgSrc: "assests/images/image6.png" },
    { name: "Shirt", imgSrc: "assests/images/1.png" },
    { name: "Shoes", imgSrc: "assests/images/2.png" },
    { name: "Pants", imgSrc: "assests/images/3.png" },
    { name: "Tie", imgSrc: "assests/images/4.png" },
  ]);

  const [addedStatus, setAddedStatus] = useState({
    jacket: false,
    umbrella: false,
  });

  const addToOrder = (itemName, imgSrc, key) => {
    if (!addedStatus[key]) {
      // Add item to the order
      setItems([...items, { name: itemName, imgSrc }]);
    } else {
      // Remove item from the order
      setItems(items.filter((item) => item.name !== itemName));
    }
    // Toggle the added status
    setAddedStatus((prevStatus) => ({ ...prevStatus, [key]: !prevStatus[key] }));
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p className="tagline">You’re going to look great in your new outfit!</p>

      <div className="checkout-content">
        {/* Left Section */}
        <div className="left-section">
          <img
            src="/assests/images/image4.png" 
            alt="Outfit preview"
            className="outfit-image"
          />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Your items</h2>
          <div className="items-list">
            {items.map((item, index) => (
              <div key={index} className="item">
                <p>{item.name}</p>
                <img src={item.imgSrc} alt={item.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Details */}
        <div className="delivery-details">
          <h3>Delivering to</h3>
          <p>1234 Bedrock Ave, Seattle, WA, 89241</p>
          <h3>Paying with</h3>
          <p>Visa 7432</p>
        </div>
      </div>

      {/* Weather Section */}
      <div className="weather-section">
        <h3>New York</h3>
        <p>
          Since you mentioned that you’ll be in New York next week, I noticed
          the weather might be a little chilly and rainy. You may want to
          consider adding a jacket or umbrella to your order!
        </p>
        <div className="weather-forecast">
          {[{
              day: "Fri", temp: "61° 45°", icon: "/assests/images/l1.svg"
            }, {
              day: "Sat", temp: "65° 42°", icon: "/assests/images/l2.svg"
            }, {
              day: "Sun", temp: "61° 54°", icon: "/assests/images/l3.svg"
            }, {
              day: "Mon", temp: "59° 50°", icon: "/assests/images/l4.svg"
            }, {
              day: "Tue", temp: "54° 46°", icon: "/assests/images/l5.svg"
            }].map((weather, index) => (
              <div key={index} className="weather-item">
                <p>{weather.day}</p>
                <img src={weather.icon} alt={`${weather.day} weather`} className="weather-icon" />
                <p>{weather.temp}</p>
              </div>
          ))}
        </div>
      </div>

      {/* Add to Order Section */}
      <div className="add-to-order-section">
        <div className="add-item">
          <p>Jacket</p>
          <img
            src="assests/images/jac1.png"
            alt="Jacket"
            className="add-item-image"
          />
          <button
            className="add-button"
            onClick={() =>
              addToOrder("Jacket", "assests/images/jac1.png", "jacket")
            }
          >
            {addedStatus.jacket ? "Remove from order" : "Add to order"}
          </button>
        </div>
        <div className="add-item">
          <p>Umbrella</p>
          <img
            src="assests/images/jac2.png"
            alt="Umbrella"
            className="add-item-image"
          />
          <button
            className="add-button"
            onClick={() =>
              addToOrder("Umbrella", "assests/images/jac2.png", "umbrella")
            }
          >
            {addedStatus.umbrella ? "Remove from order" : "Add to order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
