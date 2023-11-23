import axios from "axios";

// import Image from "next/image";
import { Container } from "@mui/joy";
// import { Grid, Typography, TextField } from "@mui/material";
// import AddToCart from "@/components/AddToCart";

async function getData(id: string) {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/user/655e9b4823f433a510193b11"
    );
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Payment({ params: { id } }: any) {
  const data = await getData(id);

  return <Container sx={{ margin: "60px" }}>hello</Container>;
}
