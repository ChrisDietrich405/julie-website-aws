import { Container, Button, ButtonGroup, Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.css";

const index = () => {
  const copyrightYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Container
      sx={{ display: "Grid", marginBottom: 200, gap: 4, marginTop: 4 }}
    >
      <Typography level="h2" sx={{ textAlign: "center", mt: 4 }}>
        Sign up to my newsletter for exclusive updates
      </Typography>
      <Box
        sx={{ display: "Grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Box>
      <Button>Sign Up</Button>
      <Box>
        <Typography sx={{ textAlign: "center" }}>
          Sign up to my newsletter for exclusive updates
        </Typography>
      </Box>
      <Box
        sx={{
          gap: 3,
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}
        aria-label="outlined primary button group"
      >
        <Button>Shipping</Button>
        <Button>FAQs</Button>
        <Button>Testimonials</Button>
      </Box>
      <Typography sx={{ textAlign: "center" }}>
        Copyright © Dietrich {copyrightYear()}
      </Typography>
    </Container>
  );
};

export default index;
