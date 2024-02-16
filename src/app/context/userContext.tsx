"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

export const userContext = createContext<{
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}>({ userId: "", setUserId: () => {} });

export const UserContextProvider = ({ children }: any) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUserId(userId);
    }
  }, []);

  return (
    <userContext.Provider value={{ userId, setUserId }}>
      {children}
    </userContext.Provider>
  );
};
