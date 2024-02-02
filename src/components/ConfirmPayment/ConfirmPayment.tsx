import React, {useEffect} from 'react';

import {CardElement, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {Box, Button} from "@mui/material";

const ConfirmPayment: React.FC = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {

  }


  useEffect(() => {
    console.log('elements ', elements)
  }, [elements]);


  return (
    <Box>
      <PaymentElement />
      <Button onClick={handleSubmit}>Confirm payment</Button>
    </Box>
  );
};

export default ConfirmPayment;
