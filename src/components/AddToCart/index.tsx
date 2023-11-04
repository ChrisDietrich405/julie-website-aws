"use client";

import { Alert, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  price: number; 
  image: string;
  amount: number;  
}

const AddToCart = ({id}: any) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const handleClick = (id: any) => {
    setOpen(true)
    const positionIndex = cart.findIndex((cartItem) => cartItem.id === id)
    if(positionIndex === -1) {
      setCart((cart) => [...cart, { ...id, amount: 1}])
    } else {
      let newArray = [...cart ] // this gives me all my previous cart properties from one cart
      let selectedItem = newArray[positionIndex]
      selectedItem = {...selectedItem, amount: selectedItem.amount + 1}  
      newArray[positionIndex] = selectedItem
      setCart(newArray)
      console.log(newArray)
    }
 
  }

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   console.log(cart)
  // }, [cart])

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  useEffect(() => {
    const prevDataJSON: string | null = localStorage.getItem("cart");
  
    if (prevDataJSON) {
      const prevData = JSON.parse(prevDataJSON); 
      setCart(prevData);
    }
  }, []);
  
  return (
    <div>
      {" "}
      <Button variant="contained" color="secondary" onClick={() => handleClick(id)}>
        Add to cart
      </Button>
      {cart.map((item) => {
        return (
          <h1>{item.amount}</h1>
        )
      })}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item added to cart.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddToCart;
