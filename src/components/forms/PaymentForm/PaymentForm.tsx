import React, {ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {PaymentFormProps} from "./PaymentForm.types";

const PaymentForm: React.FC<PaymentFormProps> = ({ formData, setFormData }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      payment: {
        ...prevData.payment,
        [event.target.id]: event.target.value,
      },
    }));
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="expiryDate"
            label="Expiry Date"
            variant="outlined"
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="cvv"
            label="CVV"
            variant="outlined"
            value={formData.cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="cardHolderName"
            label="Cardholder Name"
            variant="outlined"
            value={formData.cardHolderName}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default PaymentForm;
