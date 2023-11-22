"use client";

import { ThemeProvider } from "next-themes";
import { CartContextProvider } from "@/app/context/cartContext";
import { UserContextProvider } from "@/app/context/userContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <UserContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}
