import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5b17",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 4,
    name: "Cactus",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 30,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587",
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 22,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const totalQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        ...plant,
        quantity: 1,
      })
    );

    setAddedItems([...addedItems, plant.id]);
  };

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Air Purifying Plants",
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        <h2>Paradise Nursery</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>

          <Link to="/plants" style={{ color: "white" }}>
            Plants
          </Link>

          <Link to="/cart" style={{ color: "white" }}>
            Cart 🛒 ({totalQuantity})
          </Link>
        </div>
      </nav>

      {/* Product Categories */}
      <div style={{ padding: "20px" }}>
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ccc",
                      padding: "15px",
                      width: "220px",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    <h3>{plant.name}</h3>

                    <p>Price: ${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedItems.includes(plant.id)}
                      style={{
                        padding: "10px",
                        backgroundColor: addedItems.includes(plant.id)
                          ? "gray"
                          : "green",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    >
                      {addedItems.includes(plant.id)
                        ? "Added"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;