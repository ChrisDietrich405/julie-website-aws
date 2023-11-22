"use client";
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useContext } from "react";
import { cartContext } from "@/app/context/cartContext";

import styles from "./styles.module.css";

// const userId = localStorage.get("userId");
const Checkout = () => {
  const { cart } = useContext(cartContext);

  const router = useRouter();

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid item lg={9}>
          {cart.map((cartItem) => {
            return (
              <>
                <Card>
                  <CardContent sx={{ display: "flex", columnGap: 3 }}>
                    <Image
                      width={333}
                      height={333}
                      alt="Picture of Julie"
                      src="/images/art1.jpg"
                    />
                    <Stack rowGap={3} className={styles.card_content_items}>
                      <Typography variant="h3" fontSize={24} fontWeight={600}>
                        {cartItem.title}
                      </Typography>
                      <Typography fontSize={24} fontWeight={600}>
                        {cartItem.measurements}
                      </Typography>
                      <Typography fontSize={24} fontWeight={600}>
                        ${cartItem.price}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </>
            );
          })}
        </Grid>

        <Grid item lg={3}>
          {" "}
          <Card>
            <Button onClick={() => router.push("/payment/655d3cfb2d8ce14148c753a5")}>
              Proceed to payment
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
