"use client";
import React, {useContext, useEffect, useState} from "react";
import {Elements} from '@stripe/react-stripe-js';
import {Box, CircularProgress, Container, Stack, Typography} from "@mui/material";
import CheckoutForm from "@/components/forms/CheckoutForm/CheckoutForm";
import {loadStripe, StripeElementsOptions} from "@stripe/stripe-js";
import {cartContext} from "@/app/context/cartContext";
import {StripeApi} from "@/services";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

const CreateAccount: React.FC = () => {
  const {cart} = useContext(cartContext)
  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState('');

  const createPaymentIntent = async () => {
    const response = await StripeApi.CreatePaymentIntent(cart)

    const {data} = response;

    setAmount(data.amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    }))

    setClientSecret(data.clientSecret);
  }

  useEffect(() => {
    if (cart.length) {
      createPaymentIntent();
    }
  }, [cart]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe'
    },
    loader: "auto",
  };
  return (
    !clientSecret ?
      <Box
        textAlign="center"
        paddingY={2}
      >
        <CircularProgress/>
      </Box>
      :
      <Elements stripe={stripePromise} options={options}>
        <Container maxWidth="xl" sx={{
          paddingY: 5
        }}>
          <Stack direction="row">
            <Box
              flex={1}
              padding={0}
              margin={0}
              height="100vh"
              bgcolor="#fff"
              textAlign="center"
            >
              <Typography
                component="p"
                color="black"
                sx={{
                  paddingY: 3
                }}
              >Fill the information bellow</Typography>
              <CheckoutForm clientSecret={clientSecret}/>
            </Box>
            <Box flex={1}>
              {
                amount &&
                  <Typography>
                      Total: {amount}
                  </Typography>

              }
            </Box>
          </Stack>
        </Container>
      </Elements>
  )
};

export default CreateAccount;
