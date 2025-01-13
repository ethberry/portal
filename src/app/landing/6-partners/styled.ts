import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  margin: theme.spacing(7, 0, 14),
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: 56,
  fontWeight: 400,
  margin: theme.spacing(7, "auto", 2),
  maxWidth: 1200,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: 42,
    margin: theme.spacing(5, 4, 0),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    margin: theme.spacing(4, 4, 0),
  },
}));

export const StyledPartnersList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));

export const StyledPartners = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(6, 0, 0),
}));

export const StyledPartner = styled(Box)(({ theme }) => ({
  width: 196,
  height: 70,
  transition: "all 0.2s linear",
  cursor: "pointer",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    width: 132,
    height: 47,
    marginRight: 0,
  },
  [theme.breakpoints.down("md")]: {
    width: 105,
    height: 37.5,
    marginTop: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
    height: "auto",
    marginTop: theme.spacing(6),
  },
})) as typeof Box;
