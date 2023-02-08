import { Card, CardActionArea, CardHeader, Grid } from "@mui/material";
import React from "react";

type Props = {};

function CardComp({}: Props) {
  return (
    <Grid item xs={3} sx={{ padding: "0.7rem" }}>
      <Card
        sx={{
          maxWidth: 345,
          padding: "0.6rem",
          boxShadow: "0px 0px 10px rgb(31 25 25 / 7%)",
          "&:hover": {
            boxShadow: "0px 0px 10px rgb(31 25 25 / 20%)",
            cursor: "pointer",
          },

          //   0px 0px 10px 0 rgb(31 25 25 / 7%)
        }}
      >
        {/* <CardActionArea
          sx={{
            padding: "0.6rem",
            "&:hover": { background: "white" },
          }}
        > */}
        <CardHeader
          sx={{
            ".MuiCardHeader-title": {
              color: "#E40A0A",
              fontSize: "1.2rem",
              fontWeight: 700,
              paddingBottom: "0.5rem",
            },
            ".MuiCardHeader-subheader": {
              fontSize: "0.9rem",
            },
          }}
          // avatar={<Avatar aria-label=""></Avatar>}
          //   action={<IconButton aria-label=""></IconButton>}
          title="Dubai Municipal Approval"
          subheader="Dubai Approvals Team is a licensed engineering company in Dubai that provides you with the best engineering solutions to gain easy Dubai Municipality Approval for offices, restaurants, cafeterias, etc."
        />
        {/* </CardActionArea> */}
      </Card>
    </Grid>
  );
}

export default CardComp;
