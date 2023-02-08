import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import Image from "next/image";

type Props = {};

function SlideComp({}: Props) {
  return (
    <Box
      sx={{
        height: "95vh",
      }}
    >
      <Box
      // sx={{ background: "red", height: "100%", width: "100%", zIndex: -2 }}
      />
      <Image src="/slider-images/2.jpg" alt="" fill style={{ zIndex: -1 }} />
      <Container maxWidth="lg">
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={7} sx={{ width: "100%", color: "white" }}>
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
                  OUR ABU DHABI SERVICES
                </Typography>
                <Typography variant="body1">
                  After a decade of experience in Dubai, we have now extended
                  our branch in Abu Dhabi, UAE. Our diverse portfolio consists
                  of Architecture, Civil, Structural engineering, MEP, Interior
                  Design, and also Project Management departments. Accepted by
                  all authorities we are involved with projects in all range and
                  sizes. Click to see our Abu Dhabi Services.
                </Typography>
              </Box>
              <Grid container>
                <Grid item xs={6} sx={{ padding: "0.5rem" }}>
                  <Button fullWidth variant="contained">
                    ABU DHABI SERVICES
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
        </Grid>
      </Container>
    </Box>
  );
}

export default SlideComp;
