import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Typography,
  Stack,
  Box,
  Link,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import NavLink from "./NavLink";
// import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "black" }}>
            Logo
          </Typography>
          <Stack direction="row">
            <NavLink linkText="Home" link="/" />
            <NavLink linkText="About Us" link="/about-us" />
            <NavLink linkText="services" link="/services" />
            <NavLink linkText="Contact Us" link="/contact-us" />
            <NavLink linkText="Blog" link="/blog" />
            <NavLink linkText="Join Us" link="/Join-us" />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
