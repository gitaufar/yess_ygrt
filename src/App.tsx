import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./componen/Navbar";
import Footer from "./componen/Footer";
import { useState } from "react";
import CartModal from "./componen/CartModal";
import {
  greekDrink1L,
  greekDrink250ml,
  readyDrink,
  stick,
} from "./data/product";
import { CartProvider } from "./context/CartProvider";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        const [cart, cartCount, productAdd, productMin, handleQuantityChange] = useContext(CartContext);
        <Navbar cartClick={() => setIsOpen(true)} />

        <CartModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <Product
                greekDrink1L={greekDrink1L}
                greekDrink250ml={greekDrink250ml}
                readyDrink={readyDrink}
                stick={stick}
              />
            }
          />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
