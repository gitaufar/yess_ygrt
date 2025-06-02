import React, { createContext, useContext, useState } from "react";
import {
  greekDrink1L,
  greekDrink250ml,
  readyDrink,
  stick,
  type ProductData,
} from "../data/product";

interface CartContextType {
  cart: Map<string, ProductData>;
  cartCount: number;
  productAdd: (item: ProductData) => void;
  productMin: (item: ProductData) => void;
  handleQuantityChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ProductData
  ) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Map<string, ProductData>>(new Map());
  const [cartCount, setCartCount] = useState(0);

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ProductData
  ) => {
    const newQuantity = Number(e.target.value);
    const key = item.nama + item.type;

    if (isNaN(newQuantity) || newQuantity < 1 || newQuantity > 10) return;

    const current = cart.get(key);
    if (!current) return;

    const stockDifference = newQuantity - current.quantity;

    if (stockDifference > item.stock) return;

    const updatedCart = new Map(cart);
    updatedCart.set(
      key,
      current.copyWith({
        quantity: newQuantity,
        stock: current.stock - stockDifference,
      })
    );

    setCart(updatedCart);
    setCartCount(cartCount + stockDifference);
    item.stock -= stockDifference;
  };

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
    if (itemGlobal && itemGlobal[0] != item) itemGlobal[0].stock -= 1;
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

  return <CartContext.Provider value={{ cart, cartCount, productAdd, productMin, handleQuantityChange }}>
    {children}
  </CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
