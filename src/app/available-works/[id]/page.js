import Image from "next/image";
import { Container } from "@mui/joy";
import { Grid, Typography, TextField } from "@mui/material";
import AddToCart from "@/components/AddToCart";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/available-works/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function AvailableWorksDetails({ params: { id } }) {
  const data = await getData(id);

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: "100%" }}
      >
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
          <Image
            // className={styles.image}
            width={333}
            height={333}
            alt="slideshow"
            src={data.image}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ marginBottom: 2 }} component="h3">
            Title
          </Typography>
          <Typography sx={{ marginBottom: 2 }} component="p">
            {data.price}
          </Typography>
          <Typography sx={{ marginBottom: 2 }} component="p">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </Typography>
          <AddToCart id={data.id}/>

          {/* <TextField
            id="outlined-number"
            min={1}
            label="Quantity"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ inputMode: "numeric", min: 1 }}
            sx={{ display: "block", marginBottom: 2 }}
          /> */}
        </Grid>
      </Grid>
    
    </Container>
  );
}
