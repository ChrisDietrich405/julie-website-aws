"use client";
import { createContext, useState, useEffect } from "react";
import { cartI } from "../types/cart";

export const cartContext = createContext<{
  cart: cartI[];
  setCart: React.Dispatch<React.SetStateAction<cartI[]>>;
}>({
  cart: [],
  setCart: () => {},
});

export const ContextProvider = ({ children }: any) => {
  const [cart, setCart] = useState<cartI[]>([]);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const storage = localStorage.getItem("cart");
    if (storage) {
      const data = JSON.parse(storage);
      setCart(data);
    }
  }, []);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
