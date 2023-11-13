import { Container, Grid } from "@mui/material";
import { useContext } from "react";

import { cartContext } from "@/app/context/cartContext";

import React from "react";

const Checkout = () => {
  const { cart } = useContext(cartContext);
 
  return (
    <Container>
      <Grid container spacing={2}>
        {cart.map((cartItem) => {
          return (
            <Grid item xs={12}>
              {/* {cartItem.price} */}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Checkout;
