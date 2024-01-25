"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { LoadingButton } from '@mui/lab';

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography
} from "@mui/material";
import IdentificationForm from "@/components/forms/IdentificationForm";
import AddressForm from "@/components/forms/AddressForm";
import PaymentForm from "@/components/forms/PaymentForm";
import {StepFormData} from "./page.types";
import { OrdersApi } from "@/services/orders.service";

const steps = ['Identification', 'Address', 'Payment'];

const CreateAccount = () => {
  const [formData, setFormData] = useState<StepFormData>({
    identification: {
      firstName: '',
      lastName: '',
      email: ''
    },
    deliveryAddress: {
      streetAddress: '',
      city: '',
      postalCode: '',
      state: ''
    },
    payment: {
      cardNumber: '',
      cardHolderName: '',
      expiryDate: '',
      cvv: ''
    },
  });

  const [ loader, setLoader] = useState(false);

  const router = useRouter();

  const onSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    try {
      setLoader(true);
      const response = await OrdersApi.post({
        customer: formData.identification,
        deliveryAddress: formData.deliveryAddress,
      });

      localStorage.setItem("orderCode", response.data.orderCode);
      router.push("/payment");

    } catch (error) {
      toast.error("Incorrect email or password");
    } finally {
      setLoader(false);
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      return onSubmit();
    }


    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <IdentificationForm formData={formData.identification} setFormData={setFormData} />;
      case 1:
        return <AddressForm formData={formData.deliveryAddress} setFormData={setFormData} />;
      case 2:
        return <PaymentForm formData={formData.payment} setFormData={setFormData} />;
    }
  };

  return (
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

        <Stack>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label) => {
              return (
                <Step key={label}>
                  <StepLabel>
                    {label}
                  </StepLabel>
                </Step>

              );
            })}
          </Stepper>

          <Box
            maxWidth={600}
            marginX="auto"
            marginTop={10}
          >
            {getStepContent(activeStep)}
            <Grid container spacing={2} marginTop={2}>
              <Grid item>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
              </Grid>
              <Grid item>
                <LoadingButton variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateAccount;
