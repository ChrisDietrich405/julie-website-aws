"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { userContext } from "@/app/context/userContext";

const Payment = ({ params: { id } }: any) => {
  const { userId } = useContext(userContext);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/user/${userId}`
    );
    console.log(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>Payment</div>;
};

export default Payment;
