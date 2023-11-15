"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

import styles from "./styles.module.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
   
      const response = await axios.post("http://localhost:3000/api/auth", {
        email,
        password,
      });
  

      localStorage.setItem("token", `Bearer ${response.data.token}`);
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
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <h2>Log in</h2>
        <label htmlFor="email" className={styles.label}>
          email
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
          password
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

        <p style={{ marginBottom: "10px" }}>New to Dietrich Land Care?</p>
        <Link href="/create-account">Create an account</Link>
      </form>
    </>
  );
};

export default Login;
