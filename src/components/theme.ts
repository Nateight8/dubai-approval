import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#00ff00",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            // textTransform: 'capitalize',
            background: "#e40a0a",
            borderRadius: 0,
            marginInline: "0.5rem",
            letterSpacing: 1.3,
            fontSize: "1.2rem",
            // paddingInline: "32px",
            "&:hover": {
              background: "#D50A0A",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "uppercase",
            color: "#D50A0A",
            borderRadius: 0,
            marginInline: "0.5rem",
            letterSpacing: 1.3,
            paddingY: "1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "2px solid RGBA(196 ,196, 196, 0.3)",

            "&:hover": {
              background: "#0e7540",
              color: "white",
              border: "2px solid #f3f3f3",
            },
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // Some CSS
          fontSize: "0.8rem",
          textTransform: "capitalize",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
