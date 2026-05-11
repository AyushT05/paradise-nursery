import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + calculateItemTotal(item),
    0
  );

  const handleIncrease = (id) => {
    dispatch(
      updateQuantity({
        id,
        amount: 1,
      })
    );
  };

  const handleDecrease = (id) => {
    dispatch(
      updateQuantity({
        id,
        amount: -1,
      })
    );
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount}</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "20px",
            padding: "15px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Total Cost: $
            {calculateItemTotal(item)}
          </p>

          <button onClick={() => handleIncrease(item.id)}>
            +
          </button>

          <button onClick={() => handleDecrease(item.id)}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={handleCheckout}>
        Checkout
      </button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;