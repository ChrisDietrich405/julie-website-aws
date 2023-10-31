import React from "react";
import Image from "next/image";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/joy/Typography";

const About = () => {
  return (
    <Container>
      <Typography sx={{ textAlign: "center", my: 3 }} level="h1" component="h1">
        About Dr. Dietrich Eisler
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Image
            src="/images/art1.jpg"
            alt="about picture"
            width={400}
            height={400}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography component="p" sx={{ mb: 3 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
          <Typography component="p" sx={{ mb: 3 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
          <Typography component="p" sx={{ mb: 3 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Grid>
      </Grid>
      <Typography component="p" sx={{ mb: 3 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </Typography>
    </Container>
  );
};

export default About;
