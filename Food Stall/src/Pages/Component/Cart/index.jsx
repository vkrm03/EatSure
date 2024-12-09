import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import uri from "../../../../public/Uri";
import "./style.css";

const Cart = ({ cart, removeFromCart, setCart }) => {
  
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + parseInt(item.prize.replace("Rs. ", ""), 10) * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    try {
      const orderData = {
        usr: localStorage.getItem('username'),
        items: cart.map((item) => ({
          id: item.id,
          img: item.img,
          name: item.name,
          quantity: item.quantity,
          prize: parseInt(item.prize.replace("Rs. ", ""), 10) * item.quantity,
        })),
        total: calculateTotal(),
      };

      const response = await axios.post(uri + "/checkout", orderData);
      

      if (response.status === 200) {
        toast.success("Order placed successfully!");
        setCart([]);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p style={{textAlign:"center"}}>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="food-quantity">Quantity: {item.quantity}</p>
                <p className="food-prize">Rs.{parseInt(item.prize.replace("Rs. ", ""), 10) * item.quantity}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: Rs. {calculateTotal()}</h3>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default Cart;
