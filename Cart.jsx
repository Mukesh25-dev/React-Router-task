import React from "react";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="80" />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <span className="discounted-price">
                  Price after 10% discount: $
                  {(item.price * item.quantity * 0.9).toFixed(2)}
                </span>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
