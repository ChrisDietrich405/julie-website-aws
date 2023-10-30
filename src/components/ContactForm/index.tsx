"use client";
import React, { useState, useRef, RefObject } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const firstNameRef: any = useRef(null);
  const lastNameRef: any = useRef(null);
  const emailRef: any = useRef(null);
  const messageRef: any = useRef(null);

  // const firstNameRef: RefObject<HTMLInputElement | null> = useRef(null);
  // const lastNameRef: RefObject<HTMLInputElement | null> = useRef(null);
  // const emailRef: RefObject<HTMLInputElement | null> = useRef(null);
  // const messageRef: RefObject<HTMLTextAreaElement | null> = useRef(null);

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        email: emailRef.current?.value,
        // message: messageRef.current?.value,
        // to_name: "Emily",
        // firstName: firstNameRef.current?.value,
        // lastName: lastNameRef.current?.value,
      };

      console.log(templateParams);

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID as string
      );

      alert("Your message was successfully sent");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            ref={firstNameRef}
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            ref={lastNameRef}
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          inputRef={emailRef}
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          ref={messageRef}
          type="message"
          variant="outlined"
          color="secondary"
          label="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          fullWidth
          required
          sx={{ mb: 4 }}
          id="outlined-multiline-static"
          multiline
          rows={4}
        />

        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
