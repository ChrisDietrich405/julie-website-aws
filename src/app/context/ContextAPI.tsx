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
    setInterval(() => {
      const storage = localStorage.getItem("cart");
      if (storage) {
        const data = JSON.parse(storage);
        setCart(data);
       
      }
   
    }, 1000);
  }, []);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
