// CartItem.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>

        <h2>Total Cart Amount: ${totalAmount}</h2>

        {cartItems.length === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "20px",
                padding: "15px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <div>
                <h3>{item.name}</h3>

                <p>Unit Price: ${item.price}</p>

                <p>
                  Total Cost: ${item.price * item.quantity}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() =>
                      dispatch(decrementQuantity(item.id))
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(incrementQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{
                    marginTop: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <button
          onClick={() => alert("Coming Soon")}
          style={{
            padding: "12px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginRight: "20px",
            borderRadius: "5px",
          }}
        >
          Checkout
        </button>

        <Link to="/plants">
          <button
            style={{
              padding: "12px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartItem;