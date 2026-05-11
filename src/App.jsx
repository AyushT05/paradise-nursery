import React, { useState } from "react";
import "./App.css";

import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>

          <AboutUs />

          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;