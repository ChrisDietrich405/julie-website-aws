"use client";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const ReviewPurchase = async () => {
  const [orderCodeState, setOrderCodeState] = useState("");

  useEffect(() => {
    const orderCode = localStorage.getItem("orderCode");
    console.log("ORDERcODE", orderCode);
    if (orderCode) {
      setOrderCodeState(orderCode);
    }
  }, []);

  
    const response = await axios.get(
      `http://localhost:3000/api/orders/${orderCodeState}`
    );
    console.log(response);
  


  return <div>ReviewPurchase</div>;
};

export default ReviewPurchase;
