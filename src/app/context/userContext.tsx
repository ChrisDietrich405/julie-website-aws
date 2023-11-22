"use client";
import { createContext, useState, useEffect } from "react";

export const userContext = createContext<{ userId: string }>({ userId: "" });

export const UserContextProvider = ({ children }: any) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUserId(userId);
    }
  }, []);

  return (
    <userContext.Provider value={{ userId }}>{children}</userContext.Provider>
  );
};
