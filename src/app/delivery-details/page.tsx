"use client";
import React, {useState, FormEvent, useEffect} from "react";
import {CardElement, Elements, useElements} from '@stripe/react-stripe-js';

import {
  Box, CircularProgress,
  Container,
  Typography
} from "@mui/material";

import {loadStripe} from '@stripe/stripe-js';

import {StripeApi} from "@/services/stripe.service";
import CheckoutForm from "@/components/forms/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe('pk_test_51OdBniCc07zP9ZGY7G60C6fNxPqhjEPprGycArVZocmuXpq27xjZ172MxygSUhQiwrxEGIuXWsths2DCNnSZgnvP00brlkMDp2');


const CreateAccount = () => {
const [ clientSecret, setClientSecret ] = useState('');

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  }

  useEffect(() => {
    if (!clientSecret) {

    (async function ()  {

    const params = new URLSearchParams();
    params.append('amount', '200');
    params.append('currency', 'usd');
    const response = await StripeApi.createPaymentIntent(params);

    setClientSecret(response.data.client_secret)
    })()
    }
  }, []);


      return (
        !clientSecret ?
          <CircularProgress />
          :
    <Elements stripe={stripePromise} options={options}>
    <Container maxWidth="xl" sx={{
      paddingY: 5
    }}>
      <Box
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
        <CheckoutForm clientSecret={clientSecret} />
      </Box>
    </Container>
    </Elements>
      )
};

export default CreateAccount;
