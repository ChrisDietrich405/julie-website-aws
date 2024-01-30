import React, {FormEvent, useEffect, useState} from 'react';

import {AddressElement, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {Button, Stack, Snackbar, Alert} from "@mui/material";
import {StripeElementType} from "@stripe/stripe-js";

const CheckoutForm: React.FC<{clientSecret: string}> = ({clientSecret}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [open, setOpen] = React.useState(false);
  const [ error, setError ] = useState('');
  const [ disabled, setDisabled ] = useState(true);

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    elements?.submit();

    const response = await stripe?.confirmPayment({
      elements: elements ?? undefined,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:3000/payment-success'
      }
    });

    if (response?.error) {
      setOpen(true)
      setError(response.error?.message ?? '')
    }
  }

  const handleChange = async ({elementType}: { elementType: StripeElementType} ) => {
    console.log('chamado', elementType);

    if (elementType === 'address' || elementType === 'payment') {

      const stripeElement = elements?.getElement(elementType);

      const elementValue = await stripeElement?.getValue()

      setDisabled(!elementValue)
    }

  }


  useEffect(() => {
    console.log('elements ', elements)
  }, [elements]);


  return (
    <Stack rowGap={2}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
      <form onSubmit={(event) => handleSubmit(event)}>
      <AddressElement
        onChange={handleChange}
        options={{
          mode: 'shipping',
          fields: {
            phone: 'always',
          },
          validation: {
            phone: {
              required: 'always'
            }
          },
           }}
      />
      <PaymentElement
      />
      <Button variant="contained" type="submit" disabled={disabled}>Confirm payment</Button>
      </form>
    </Stack>
  );
};

export default CheckoutForm;
