"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Container } from "@mui/joy";

import styles from "./styles.module.css";

const CreateAccount = () => {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    email: "",
  });

  const [deliveryAddress, setDeliveryAddress] = useState({
    streetAddress: "",
    city: "",
    zipCode: "",
  });

  const [orderCode, setOrderCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setDeliveryAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/orders",
        {
          customer,
          deliveryAddress,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data.orderCode);
      setOrderCode(response.data.orderCode);
      localStorage.setItem("orderCode", response.data.orderCode);
      router.push("/payment");

      //   if (response.data.account.profile_id === 1) {
      //     Router.push("/invoice-dashboard");
      //   }
      //   if (response.data.account.profile_id === 2) {
      //     Router.push("/useraccount");
      //   }
    } catch (error) {
      toast.error("Incorrect email or password");
    }
  };

  return (
    <Container
      maxWidth="xl"
      style={{ padding: 0, margin: 0, height: "100vh" }}
      className={styles.container_background}
    >
      <h2>Add Delivery Details</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.form_section}>
          <label htmlFor="firstName" className={styles.label}>
            First Name
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={styles.input}
              value={customer.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastName" className={styles.label}>
            Last Name
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={styles.input}
              value={customer.lastName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="streetAddress" className={styles.label}>
            Street Address
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              className={styles.input}
              value={deliveryAddress.streetAddress}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.form_section}>
          <label htmlFor="city" className={styles.label}>
            City
            <input
              type="text"
              name="city"
              id="city"
              className={styles.input}
              value={deliveryAddress.city}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="city" className={styles.label}>
            Zip Code
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              className={styles.input}
              value={deliveryAddress.zipCode}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              className={styles.input}
              value={customer.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </Container>
  );
};

export default CreateAccount;
