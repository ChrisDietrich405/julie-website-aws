"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Container, Button, Typography } from "@mui/material";
import {OrdersApi} from "@/services/orders.service";

const Payment = () => {
  const [orderCodeState, setOrderCodeState] = useState("");
  const router = useRouter();

  const handleUpdatePayment = () => {
    updatePayment();
    router.push("/review-purchase");
  };

  const updatePayment = async () => {

    await OrdersApi.put(orderCodeState, {type: 'credit card'});
  };

  useEffect(() => {
    const orderCode = localStorage.getItem("orderCode");
    if (orderCode) {
      setOrderCodeState(orderCode);
    }
  }, []);

  return (
    <Container sx={{ margin: "60px" }}>
      <Typography>Here is where we will add the credit card info</Typography>
      <Button onClick={handleUpdatePayment}>Save payment</Button>
    </Container>
  );
};

export default Payment;
