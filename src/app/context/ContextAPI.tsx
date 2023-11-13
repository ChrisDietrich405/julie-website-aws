import { createContext, useState, useEffect} from "react";
import { cartItem } from "../types/cart";

export const cartContext = createContext<cartItem>({});

export const ExpenseProvider = ({ children }: any) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storage = localStorage.getItem("cart");
    if (storage) {
      const data = JSON.parse(storage);
      setCart(data);
  
    }
  }, []);

  return (
    <cartContext.Provider
      value={{cart, setCart}}
    >
      {children}
    </cartContext.Provider>
  );
};