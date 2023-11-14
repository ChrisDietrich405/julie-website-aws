"use client";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useContext } from "react";

import { cartContext } from "@/app/context/cartContext";

import React from "react";

const Checkout = () => {
  const { cart } = useContext(cartContext);

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        {cart.map((cartItem) => {
          return (
            <Grid item lg={12}>
              <Card sx={{ maxWidth: 1200 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <h1>{cartItem.title}</h1>
                  <Typography gutterBottom variant="h5" component="div">
                    {cartItem.title} helllooooo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              {cartItem.price}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Checkout;
