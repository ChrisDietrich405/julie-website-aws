"use client";

import { ThemeProvider } from "@mui/material";
import { CartContextProvider } from "@/app/context/cartContext";
import { UserContextProvider } from "@/app/context/userContext";
import { theme } from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}
