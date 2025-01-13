"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 500,
  margin: theme.spacing(4, 0, 7),
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: 28,
    margin: theme.spacing(4, 0),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    margin: theme.spacing(3, 0),
  },
}));
