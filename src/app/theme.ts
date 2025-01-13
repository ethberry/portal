"use client";

import { createTheme } from "@mui/material/styles";

const lightPalette = {
  background: {
    default: "#4286f5",
    paper: "#f5f5f5",
  },
  primary: {
    contrastText: "#f5f5f5",
    main: "#4286f5",
  },
  text: {
    primary: "#272a30",
  },
};

export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: lightPalette,
});
