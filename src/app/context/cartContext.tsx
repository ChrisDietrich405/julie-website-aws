"use client";
import {createContext, useEffect, useState} from "react";
import {ICart} from "@/models";

export const cartContext = createContext<{
  cart: ICart;
  setCart: React.Dispatch<React.SetStateAction<ICart>>;
}>({
  cart: [],
  setCart: () => {
  },
});

export const CartContextProvider = ({children}: any) => {
  const [cart, setCart] = useState<ICart>([]);

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
    <cartContext.Provider value={{cart, setCart}}>
      {children}
    </cartContext.Provider>
  );
};
