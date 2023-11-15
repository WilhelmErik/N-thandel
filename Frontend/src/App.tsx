// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { CartProvider } from "./Components/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <>
        <BrowserRouter>
          <Header title={"Christmas Things"}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
          <Footer text="Eastcost Stuff&copy; 2023" />
        </BrowserRouter>
      </>
    </CartProvider>
  );
}

export default App;
