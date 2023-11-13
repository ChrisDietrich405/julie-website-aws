"use client";
import { createContext, useState, useEffect } from "react";
import { cartItem } from "../types/cart";

export const cartContext = createContext<{
  cart: cartItem[];
  setCart: React.Dispatch<React.SetStateAction<cartItem[]>>;
}>({
  cart: [],
  setCart: () => {},
});

export const ContextProvider = ({ children }: any) => {
  const [cart, setCart] = useState<cartItem[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("cart");
    if (storage) {
      const data = JSON.parse(storage);
      setCart(data);
      console.log(data);
    }
  }, []);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
