import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import CardComp from "./CardComp";

type Props = {};

const Section = (props: Props) => {
  return (
    <section style={{ minHeight: "60vh", marginBlockEnd: "1rem" }}>
      <Container maxWidth="lg" sx={{ paddingY: "1rem" }}>
        <Grid container>
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </Grid>
        <Button fullWidth variant="outlined" sx={{ marginBlock: "0.8rem" }}>
          View more
        </Button>
      </Container>
    </section>
  );
};

export default Section;
