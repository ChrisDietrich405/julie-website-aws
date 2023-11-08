"use client";

import { Alert, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  price: number;
  image: string;
}

const AddToCart = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [disableBtn, setDisableBtn] = useState(false);

  const handleClick = (data: any) => {
    setOpen(true);
    setDisableBtn(true);
    const positionIndex = cart.findIndex((cartItem) => cartItem.id === data.id);
    if (positionIndex === -1) {
      setCart((cart) => [...cart, { id: data.id, price: data.price, image: data.image }]);
    }
  };

  useEffect(() => {
    if(cart.length) {
    localStorage.setItem("cart", JSON.stringify(cart))}
  }, [cart]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {" "}
      <Button
        disabled={disableBtn}
        variant="contained"
        color="secondary"
        onClick={() => handleClick(data)}
      >
        Add to cart
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item added to cart.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddToCart;
