"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// import Image from "next/image";
import { Container, Button } from "@mui/joy";
import { Router } from "next/router";
// import { Grid, Typography, TextField } from "@mui/material";
// import AddToCart from "@/components/AddToCart";

const Payment = () => {
  const [orderCodeState, setOrderCodeState] = useState("");
  const router = useRouter();

  const handleUpdatePayment = () => {
    updatePayment();
    router.push("/review-purchase");
  };

  const updatePayment = async () => {
    const response = await axios.put(
      `http://localhost:3000/api/orders/${orderCodeState}`,
      {
        type: "credit card",
      }
    );
    console.log(response);
  };

  useEffect(() => {
    const orderCode = localStorage.getItem("orderCode");
    if (orderCode) {
      setOrderCodeState(orderCode);
    }
  }, []);

  return (
    <Container sx={{ margin: "60px" }}>
      <Button onClick={handleUpdatePayment}>Save payment</Button>
    </Container>
  );
};

export default Payment;
