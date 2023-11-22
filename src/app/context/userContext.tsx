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

  // useEffect(() => {
  //   const storage = localStorage.getItem("userId");
  //   console.log("STORAGE", storage);
  //   if (storage) {
  //     const userId = JSON.parse(storage);
  //     return userId;
  //   }
  // }, []);

  return (
    <userContext.Provider value={{ userId }}>{children}</userContext.Provider>
  );
};
