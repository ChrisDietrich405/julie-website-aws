"use client";
import React, { useState, FormEvent, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Oval } from "react-loader-spinner";

<Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="oval-loading"
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}
/>;

import { userContext } from "../context/userContext";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { userId, setUserId } = useContext(userContext);

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/auth", {
        email,
        password,
      });

      setUserId(response.data.userId);

      localStorage.setItem("token", `Bearer ${response.data.token}`);

      // Router.push("/available-works");

      //   if (response.data.account.profile_id === 1) {
      //     Router.push("/invoice-dashboard");
      //   }
      //   if (response.data.account.profile_id === 2) {
      //     Router.push("/useraccount");
      //   }
      router.push("/");
      setLoading(false);
    } catch (error) {
      toast.error("Incorrect email or password");
    }
  };

  return (
    <>
      <ToastContainer />

      {loading ? (
        <div className={styles.loader}>
          <Oval />
        </div>
      ) : (
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

          <p style={{ marginBottom: "10px" }}>New to Julie Dtrick?</p>
          <Link href="/create-account">Create an account</Link>
        </form>
      )}
    </>
  );
};

export default Login;
