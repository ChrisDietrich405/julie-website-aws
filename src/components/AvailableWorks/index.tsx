"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import lodashChunk from "lodash.chunk";
import { Button, Grid, Typography } from "@mui/material";
import { Item } from "./page.styles";

// import data from "../../data";

import styles from "./styles.module.css";

interface IData {
  id: number;
  price: number;
  image: string;
}

export default function RowAndColumnSpacing() {
  //   const pairs = lodashChunk(data, 2);
  const router = useRouter();

  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/available-works");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Available Works</h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: "100%" }}
      >
        {data.map((art: any, index: any) => {
          return (
            <Grid key={`firstArrayIndex ${index}`} item xs={6}>
              <Item>
                <Image
                  className={styles.image}
                  width={333}
                  height={333}
                  alt="slideshow"
                  src={art.image}
                />
                <Typography sx={{ marginBottom: 2 }} component="p">
                  Simply fill out the form and I'll be in touch soon.
                </Typography>

                <Button
                  type="button"
                  onClick={() => router.push(`/available-works/${art.id}`)}
                >
                  Details
                </Button>

                <Link href={`/available-works/${art.id}`}>
                  <Button variant="contained" color="secondary">
                    About
                  </Button>
                </Link>
              </Item>
            </Grid>
          );
        })}

        {/* {pairs[1].map((art: any, index: any) => {
          return (
            <Grid key={`secondArrayIndex ${index}`} item xs={6}>
              <Item>
                <Image
                  className={styles.image}
                  width={333}
                  height={333}
                  alt="slideshow"
                  src={art.image}
                />
                <Typography sx={{ marginBottom: 2 }} component="p">
                  Simply fill out the form and I'll be in touch soon.
                </Typography>

                <Link href={`/available-works/${art.id}`}>
                  <Button variant="contained" color="secondary">
                    About
                  </Button>
                </Link>
              </Item>
            </Grid>
          );
        })} */}
      </Grid>
    </>
  );
}
