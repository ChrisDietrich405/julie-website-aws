"useClient";
import Image from "next/image";
import { Button, Container, Grid, Typography } from "@mui/material";

import { ItemDynamic } from "../../../components/AvailableWorks/page.styles";

const artId = () => {
  return (
    <Container>
      <ItemDynamic>
        {/* <Image
          // className={styles.image}
          width={333}
          height={333}
        //   alt="slideshow"
        //   src={dataDetails.image}
        /> */}
        {/* <p>{dataDetails.price}</p> */}
        <Typography sx={{ marginBottom: 2 }} component="p">
          Simply fill out the form and I'll be in touch soon.
        </Typography>

        {/* <Button
            type="button"
            onClick={() => router.push(`/available-works/${art.id}`)}
          >
            Details
          </Button> */}

        {/* <Link href={`/available-works/${art.id}`}>
            <Button variant="contained" color="secondary">
              About
            </Button>
          </Link> */}
      </ItemDynamic>
    </Container>
  );
};

export default artId;
