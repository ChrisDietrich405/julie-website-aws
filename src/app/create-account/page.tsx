"use client";
import React, { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Container } from "@mui/joy";

import styles from "./styles.module.css";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("hello");
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/user", {
        firstName,
        lastName,
        streetAddress,
        city,
        email,
        password,
      });

      router.push("/login");
      toast.success("Created account successfully");
      //   if (response.data.account.profile_id === 1) {
      //     Router.push("/invoice-dashboard");
      //   }
      //   if (response.data.account.profile_id === 2) {
      //     Router.push("/useraccount");
      //   }
    } catch (error: unknown) {
      const errorMessage = (error as AxiosError<{ message: string }>).response
        ?.data.message;
      toast.error(errorMessage);
    }
  };

  return (
    <Container
      maxWidth="xl"
      style={{ padding: 0, margin: 0, height: "100vh" }}
      className={styles.container_background}
    >
      <form onSubmit={onSubmit} className={styles.form}>
        <h2>Create account</h2>
        <label htmlFor="firstName" className={styles.label}>
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            className={styles.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="lastName" className={styles.label}>
          Last Name
          <input
            type="text"
            name="lastName"
            id="lastName"
            className={styles.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label htmlFor="streetAddress" className={styles.label}>
          Street Address
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            className={styles.input}
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </label>
        <label htmlFor="city" className={styles.label}>
          City
          <input
            type="text"
            name="city"
            id="city"
            className={styles.input}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="text"
            name="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </Container>
  );
};

export default CreateAccount;
