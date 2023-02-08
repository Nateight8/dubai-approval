import theme from "@/components/theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import Navbar from "@/components/nav/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
