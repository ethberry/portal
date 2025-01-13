"use client";

import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  overflowY: "auto",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  position: "relative",
  background: "linear-gradient(to bottom, #4286f5 0%, #4286f5 50%, #F5F5F5 50%, #F5F5F5 100%)",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    background: "linear-gradient(to bottom, #4286f5 0%, #4286f5 45%, #F5F5F5 45%, #F5F5F5 100%)",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(14),
  "&.MuiContainer-root": {
    maxWidth: 1920,
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(8),
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));
