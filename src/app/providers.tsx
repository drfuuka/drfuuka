"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

export default function Providers({ children }: { children: ReactNode }) {
  const muiConfig = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    palette: {
      primary: {
        light: "#75d0e3",
        main: "#75d0e3",
        dark: "#002884",
        contrastText: "#fff",
      },
    },
  });

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <MUIThemeProvider theme={muiConfig}>{children}</MUIThemeProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
