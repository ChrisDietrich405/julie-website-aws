"use client";

import { cartContext } from "@/app/context/cartContext";
import { Alert, Button, Snackbar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

const AddToCart = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const { cart, setCart } = useContext(cartContext);
  const [disableBtn, setDisableBtn] = useState(false);

  const handleClick = (data: any) => {
    console.log(data);
    setOpen(true);
    setDisableBtn(true);

      const positionIndex = cart.findIndex(
        (cartItem) => cartItem.id === data._id
      );

      if (positionIndex === -1) {
        setCart((cart) => [
          ...cart,
          {
            id: data._id,
            price: data.price,
            image: data.image,
            measurements: data.measurements,
            title: data.title,
          },
        ]);
      }
 
  };

  useEffect(() => {
    const positionIndex = cart.findIndex(
      (cartItem) => cartItem.id === data._id
    );

    if (positionIndex >= 0) {
      setDisableBtn(true);
    }
  }, []);

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
