import Image from "next/image";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { Item } from "./page.styles";

async function getData() {
  const res = await fetch("http://localhost:3000/api/available-works");
  console.log(res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
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
                <Item>
                  <Image
                    // className={styles.image}
                    width={333}
                    height={333}
                    alt="slideshow"
                    src={item.image}
                  />
                  <Typography sx={{ marginBottom: 2 }} component="p">
                    Simply fill out the form and I'll be in touch soon.
                  </Typography>
                

                  <Link href={`/available-works/${item._id}`}>
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
    </main>
  );
}
