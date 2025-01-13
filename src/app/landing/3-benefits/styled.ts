import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(8),
  position: "relative",
}));

export const StyledContent = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(3, 3, 0, 0),
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
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

export const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(7, 4, 10),
  maxWidth: 1200,
  zIndex: 2,
  [theme.breakpoints.down("md")]: {},
}));

export const StyledImageWrapper = styled(Box)(({ theme }) => ({
  marginTop: -400,
  [theme.breakpoints.up("xl")]: {
    marginTop: -590,
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: -350,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: -190,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -120,
  },
})) as typeof Box;

export const StyledCupImage = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {},
})) as typeof Box;

export const StyledConfettiImage = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  position: "absolute",
  bottom: 250,
  left: 0,
  zIndex: 3,
  [theme.breakpoints.down("lg")]: {
    bottom: 170,
  },
  [theme.breakpoints.down("md")]: {
    bottom: 130,
  },
  [theme.breakpoints.down("sm")]: {
    bottom: 60,
  },
})) as typeof Box;

export const StyledBenefit = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: theme.spacing(5),
  borderRadius: theme.spacing(3),
  color: theme.palette.text.primary,
  "&:hover": {
    background: "url('/landing/benefits/benefits-card-bg.png') center no-repeat",
    backgroundSize: "cover",
    color: theme.palette.primary.contrastText,
    boxShadow: "0px 30px 20px rgba(0, 0, 0, 0.25)",
  },
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(2, 2, 4),
  },
}));

export const StyledBenefitTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontSize: 14,
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    fontSize: 10,
  },
}));

export const StyledBenefitDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontSize: 19,
  fontWeight: 400,
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
}));
