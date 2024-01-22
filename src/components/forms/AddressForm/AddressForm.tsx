import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {AddressFormProps} from "./AddressForm.types";

const AddressForm: React.FC<AddressFormProps> =
  ({ formData, setFormData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      deliveryAddress: {
        ...prevData.deliveryAddress,
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
            id="streetAddress"
            label="Street Address"
            variant="outlined"
            value={formData.streetAddress}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="city"
            label="City"
            variant="outlined"
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="state"
            label="State"
            variant="outlined"
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="postalCode"
            label="Postal Code"
            variant="outlined"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default AddressForm;
