import Image from "next/image";
import Link from "next/link";

import {Button, Card, Grid, Typography} from "@mui/material";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/available-works");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();


    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <h1>Available Works</h1>
      <>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "100%" }}
        >
          {data.map((item: any, index: any) => {
            return (
              <Grid key={`firstArrayIndex ${index}`} item xs={6}>
                <Card>
                  <Image
                    width={333}
                    height={333}
                    alt="slideshow"
                    src={item.image}
                  />
                  <Typography sx={{ marginBottom: 2 }} component="p">
                    {item.title}
                  </Typography>

                  <Link href={`/available-works/${item._id}`}>
                    <Button variant="contained" color="primary">
                      Details
                    </Button>
                  </Link>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </>
    </main>
  );
}
