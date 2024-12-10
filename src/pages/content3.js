

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./content3.css";

const Content = () => {
  const [conversation, setConversation] = useState([]);
  const [suggestedPrompt, setSuggestedPrompt] = useState(
    "What do people like about the business formal jacket?"
  );
  const [showFinalizeButton, setShowFinalizeButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showCartItems, setShowCartItems] = useState(false);

  const navigate = useNavigate();
  const conversationEndRef = useRef(null);

  // Scroll to the bottom whenever conversation updates
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleSend = () => {
    const userMessage = suggestedPrompt;

    setConversation((prev) => [
      ...prev,
      {
        sender: "You",
        message: userMessage,
        avatar: "/assests/images/chatlogo.svg",
      },
    ]);

    setIsLoading(true);
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsButtonDisabled(false);

      let aiReply;
      if (
        suggestedPrompt ===
        "What do people like about the business formal jacket?"
      ) {
        aiReply = {
          sender: "AI Stylist",
          message:
            "Customers like the quality, color, and fabric of the jacket. They mention that it is lightweight and keeps them warm.",
          avatar: "/assests/images/ai.svg",
          tags: ["Quality", "Fabric", "Jacket"],
          reviewsCount: 325,
        };
        setSuggestedPrompt(
          "Show me specific reviews that talk about the quality of the fabric for the jacket."
        );
      } else if (
        suggestedPrompt ===
        "Show me specific reviews that talk about the quality of the fabric for the jacket."
      ) {
        aiReply = {
          sender: "AI Stylist",
          message: "Here's a review from Alex who gave 5 stars to this jacket:",
          avatar: "/assests/images/ai.svg",
          review: {
            name: "Alex M",
            title: "Best jacket I ever owned",
            date: "October 12, 2023",
            rating: 5,
            content:
              "Review: I wear this jacket every day at work and it's so comfortable. The fabric is too good for the price. My teammates are always asking where I bought it from.",
            image: "/assests/images/image6.png",
          },
        };
        setSuggestedPrompt("What size should I wear?");
      } else if (suggestedPrompt === "What size should I wear?") {
        aiReply = {
          sender: "AI Stylist",
          message:
            "Based on your previous purchases, I suggest ordering size M. The Business Blazer Jacket runs true to size.",
          avatar: "/assests/images/ai.svg",
        };
        setSuggestedPrompt("Add the jacket to my cart.");
      } else if (suggestedPrompt === "Add the jacket to my cart.") {
        aiReply = {
          sender: "AI Stylist",
          message:
            "Done! I added the Business Blazer Jacket to your cart. Based on previous purchases, I selected an M size for you.",
          avatar: "/assests/images/ai.svg",
        };
        setSuggestedPrompt(
          "Add the rest of the items from the Business formal look to my cart."
        );
      } else if (
        suggestedPrompt ===
        "Add the rest of the items from the Business formal look to my cart."
      ) {
        aiReply = {
          sender: "AI Stylist",
          message:
            "Done! I added the rest of the Business formal look to your cart. Based on your previous purchases, I pre-selected the sizes for you.",
          avatar: "/assests/images/ai.svg",
        };
        
       // setConversation((prev) => [...prev, aiReply]);
        setShowCartItems(true); // Show the cart items
        setSuggestedPrompt("");
        setShowFinalizeButton(true);
      }
      setConversation((prev) => [...prev, aiReply]);
    }, 2000);
  };

  return (
    <div className="content-container">
      {/* Header Section */}
      <div className="content-header">
        <img
          src="/assests/images/ai.svg"
          alt="AI Stylist Logo"
          className="ai-logo"
        />
        <div className="block1">
          <p className="content-title2">AI Stylist</p>
          <p className="content-subtitle">
            I’ve selected two outfits for you to choose from based on your
            inputs, available items, and customer reviews. People like these two
            looks when it comes to working from the office.
          </p>
        </div>
      </div>

      {/* Outfit Recommendation Section */}
      <div className="outfit-gallery">
        <div className="outfit-card">
          <h3 className="outfit-title">Business formal</h3>
          <img
            src="/assests/images/image4.png"
            alt="Business Formal"
            className="outfit-image"
          />
          <p className="outfit-description">
            The business formal look embodies sophisticated professionalism. At
            the heart of this ensemble is a timeless and fitted pantsuit.
            Underneath the tailored jacket, is a classic button-down shirt to
            create an elegant pairing.
          </p>
        </div>

        <div className="outfit-card">
          <h3 className="outfit-title">Business casual</h3>
          <img
            src="/assests/images/image5.png"
            alt="Business Casual"
            className="outfit-image"
          />
          <p className="outfit-description">
            Elevate your professional style with our carefully curated business
            casual look. The centerpiece of this look is a fitted blazer in a
            classic yet versatile color. Pair it with a silk blouse and tapered
            slacks.
          </p>
        </div>
      </div>

      {/* Conversation Section */}
      <div className="conversation-container">
        {conversation.map((chat, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              chat.sender === "You" ? "user-message" : "ai-message"
            }`}
          >
            <img
              src={chat.avatar}
              alt={`${chat.sender} avatar`}
              className="chat-avatar"
            />
            <div>
              <p className="chat-sender">{chat.sender}</p>
              <p className="chat-message">{chat.message}</p>
              {chat.tags && (
                <div className="tag-list">
                  {chat.tags.map((tag, idx) => (
                    <div key={idx} className="tag">
                      {tag}
                    </div>
                  ))}
                </div>
              )}
              {chat.reviewsCount && (
                <p className="reviews-count">
                  {chat.reviewsCount} customer reviews
                </p>
              )}
              {/* {chat.review && (
                <div className="review-card">
                  <img
                    src={chat.review.image}
                    alt="Jacket"
                    className="review-image"
                  />
                  <p className="review-title">
                    <strong>{chat.review.name}</strong> -{" "}
                    {chat.review.title} ({chat.review.date})
                  </p>
                  <p className="review-content">{chat.review.content}</p>
                </div>
              )} */}
  {chat.review && (
  <div className="review-card">
    <img
      src={chat.review.image}
      alt="Jacket"
      className="review-image"
    />
    <div className="review-text">
      <p className="review-title">
        <strong>{chat.review.name}</strong> - {chat.review.title} ({chat.review.date})
      </p>
      <p className="review-content">{chat.review.content}</p>
      
      {/* 5 Star Rating */}
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`star ${i < chat.review.rating ? "star" : "star-empty"}`}
          >
            &#9733; {/* Star symbol */}
          </span>
        ))}
      </div>
    </div>
  </div>
)}

            </div>
          </div>
        ))}

        {/* Loading Animation */}
        {isLoading && (
          <div className="loading-indicator">
            <div className="dots-container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}

        <div ref={conversationEndRef} /> {/* Invisible div to scroll into view */}
      </div>

      {/* Suggested Prompt Section */}
      {suggestedPrompt && (
        <div className="suggested-prompt-container">
          <p className="suggested-prompt-label">Suggested prompt</p>
          <div className="suggested-prompt-box">
            <p className="suggested-prompt-text">{suggestedPrompt}</p>
            <button
              className="send-prompt-btn"
              onClick={handleSend}
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? "Sent" : "Send"}
            </button>
          </div>
        </div>
      )}

      {/* Display Cart Items */}
      {showCartItems && (
        <div className="cart-items-container">
          
          <div className="cart-item">
            <img src="/assests/images/1.png" alt="Shirt" />
            <p>Shirt</p>
            <select defaultValue="Medium">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="cart-item">
            <img src="/assests/images/2.png" alt="Shoes" />
            <p>Shoes</p>
            <select defaultValue="7">
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <div className="cart-item">
            <img src="/assests/images/3.png" alt="Pants" />
            <p>Pants</p>
            <select defaultValue="8">
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <div className="cart-item">
            <img src="/assests/images/4.png" alt="Tie" />
            <p>Tie</p>
            <select defaultValue="One Size">
              <option>One Size</option>
            </select>

          </div>
         
        </div>
        
      )}

      {/* Display Finalize Checkout Text */}
{showCartItems &&  (
  <div className="checkout-text-container">
    <p className="checkout-text">
      Are you ready to checkout and finalize your order?
    </p>
  </div>
)}
      {/* Finalize Button */}
       {/* Finalize My Order Button */}
       {showFinalizeButton && (
        <div className="finalize-container">
          <button
            className="finalize-btn"
            onClick={() => navigate("/finalpage")}
          >
            Finalize my order
          </button>
        </div>
      )}
    </div>
  );
};

export default Content;