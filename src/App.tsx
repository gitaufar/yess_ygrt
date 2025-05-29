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
  type ProductData,
} from "./data/product";

function App() {
  const [cart, setCart] = useState<Map<string, ProductData>>(new Map());
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const productAdd = (item: ProductData) => {
    console.log(item.stock);
    if (item.stock === 0) return;
    let itemGlobal = null;
    switch (item.type) {
      case "Ready Drink":
        itemGlobal = readyDrink.filter((i) => i.id === item.id);
        break;
      case "Stick":
        itemGlobal = stick.filter((i) => i.id === item.id);
        break;
      case "Greek Drink 250 ML":
        itemGlobal = greekDrink250ml.filter((i) => i.id === item.id);
        break;
      case "Greek Drink 1 L":
        itemGlobal = greekDrink1L.filter((i) => i.id === item.id);
        break;
    }
    const key = item.nama + item.type;
    const existing = cart.get(key);
    const updatedCart = new Map(cart);

    if (existing) {
      updatedCart.set(
        key,
        existing.copyWith({
          quantity: existing.quantity + 1,
          stock: existing.stock - 1,
        })
      );
    } else {
      updatedCart.set(
        key,
        item.copyWith({ quantity: 1, stock: item.stock - 1 })
      );
    }

    setCart(updatedCart);
    setCartCount(cartCount + 1);
    item.stock -= 1;
    if(itemGlobal && itemGlobal[0] != item) itemGlobal[0].stock -= 1;
  };

  const productMin = (item: ProductData) => {
    if (item.stock === 10) return;
    let itemGlobal = null;
    switch (item.type) {
      case "Ready Drink":
        itemGlobal = readyDrink.filter((i) => i.id === item.id);
        break;
      case "Stick":
        itemGlobal = stick.filter((i) => i.id === item.id);
        break;
      case "Greek Drink 250 ML":
        itemGlobal = greekDrink250ml.filter((i) => i.id === item.id);
        break;
      case "Greek Drink 1 L":
        itemGlobal = greekDrink1L.filter((i) => i.id === item.id);
        break;
    }
    const key = item.nama + item.type;
    const updatedCart = new Map(cart);
    const existing = cart.get(key);
    if (existing) {
      updatedCart.set(
        key,
        existing.copyWith({
          quantity: existing.quantity - 1,
          stock: existing.stock + 1,
        })
      );
    }

    setCartCount(cartCount - 1);
    setCart(updatedCart);
    item.stock += 1;
    if (itemGlobal && itemGlobal[0] != item) itemGlobal[0].stock += 1;
  };

  return (
    <BrowserRouter>
      <Navbar count={cartCount} cartClick={() => setIsOpen(true)} />

      <CartModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        items={cart}
        addCart={productAdd}
        removeCart={productMin}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <Product
              onClick={productAdd}
              greekDrink1L={greekDrink1L}
              greekDrink250ml={greekDrink250ml}
              readyDrink={readyDrink}
              stick={stick}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
