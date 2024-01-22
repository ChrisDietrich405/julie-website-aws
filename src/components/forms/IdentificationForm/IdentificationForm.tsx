import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {IdentificationFormProps} from "./IdentificationForm.types";
import {StepFormData} from "@/app/delivery-details/page.types";

const IdentificationForm: React.FC<IdentificationFormProps> = ({ formData, setFormData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData: StepFormData) => ({
      ...prevData,
      identification: {
        ...prevData.identification,
        [event.target.id]: event.target.value,
      },
    }));
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="firstName"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default IdentificationForm;
