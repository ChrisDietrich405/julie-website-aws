"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Payment = ({ params: { id } }: any) => {
  const getUser = async () => {
    const response = await axios.get(`http://localhost:3000/api/user/${id}`);
    console.log(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>Payment</div>;
};

export default Payment;
