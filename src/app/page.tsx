// https://www.janehindmarchart.com/portfolio
import Slideshow from "@/components/Slideshow";
import { Container } from "@mui/material";
import Typography from "@mui/joy/Typography";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slideshow />
      <Container>
        <Typography sx={{ textAlign: "center", my: 3 }} component="h5">
          Available Works
        </Typography>
      </Container>
    </main>
  );
}
