import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/joy/Typography";

const About = () => {
  return (
    <Container>
      <Typography sx={{ textAlign: "center", my: 3 }} level="h1" component="h1">
        About Dr. Dietrich Eisler
      </Typography>
    </Container>
  );
};

export default About;
