import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import Image from "next/image";

type Props = {};

function SlideComponent({}: Props) {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #004d21, #10824a)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ height: "95vh" }}>
          <Grid item xs={6} sx={{ width: "100%", color: "white" }}>
            <Stack
              justifyContent="center"
              sx={{
                width: "100%",
                height: "90vh",
              }}
            >
              <Box sx={{ padding: "1rem" }}>
                <Typography
                  sx={{
                    paddingY: "1rem",
                    fontWeight: 700,
                    fontSize: "3rem",
                  }}
                  variant="h4"
                >
                  APPROVALS MADE EASY
                </Typography>
                <Typography variant="body1">
                  Dubai Approvals Team focuses on solutions and strategies to
                  gain the maximum success rate for completing a development
                  project. We build a special bonding with our clients and help
                  in optimizing the project development process with high
                  Standards.
                </Typography>
              </Box>
              <Grid container>
                <Grid item xs={6} sx={{ padding: "0.5rem" }}>
                  <Button fullWidth variant="contained">
                    Our Services
                  </Button>
                </Grid>
                <Grid item xs={6} sx={{ padding: "0.5rem" }}>
                  <Button fullWidth variant="contained">
                    Hire Contractors
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: "6rem", paddingLeft: "1rem" }}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
              }}
            >
              <Image alt="" src="/slider-images/slider-image.png" fill />
            </Box>
          </Grid>
        </Grid>
        {/* </Stack> */}
      </Container>
    </Box>
  );
}

export default SlideComponent;
