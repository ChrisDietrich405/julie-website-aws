import Image from "next/image";
import Link from "next/link";

import {Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";

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
      <Container disableGutters>
      <h1>Available Works</h1>
      <>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}

        >
          {data.map((item: any, index: any) => {
            return (
              <Grid key={`firstArrayIndex ${index}`} item xs={6}>
                <Card sx={{
                  maxWidth: 500,
                  marginX: 'auto'
                }}>
                  <CardContent>
                  <Stack
                    gap={3}
                    textAlign="center"
                  >
                    <Box height={320} overflow="hidden">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="slideshow"
                      src={item.image}
                      style={{
                        width: '100%',
                        height: 'auto',
                        position: 'relative',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}
                    />
                    </Box>

                    <Typography variant="h4">
                      {item.title}
                    </Typography>

                    <Link href={`/available-works/${item._id}`}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        Details
                      </Button>
                    </Link>
                  </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </>
      </Container>
    </main>
  );
}
