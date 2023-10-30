import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Contact",
    route: "/contact",
  },
  {
    title: "Portfolio",
    route: "/portfolio",
  },
  {
    title: "Available Works",
    route: "/available-works",
  },
  {
    title: "Book",
    route: "/book",
  },
];

export default function Navbar() {
  const appBarStyle = {
    backgroundColor: "white",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Julie Dietrich Art
          </Typography>
          {navLinks.map((navLink, index) => {
            return (
              <Link key={index} href={navLink.route} passHref>
                <Button sx={{ mx: 2 }} variant="text" className="btn">
                  {navLink.title}
                </Button>
              </Link>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
