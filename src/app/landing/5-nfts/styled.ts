import { styled } from "@mui/material/styles";
import { Box, SvgIcon, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, "auto", 10),
  padding: theme.spacing(15, 10, 30),
  background: "url('/landing/nft/nfts.jpg') center no-repeat",
  backgroundSize: "cover",
  borderRadius: theme.spacing(3),
  boxShadow: "0 32px 42px rgba(0, 0, 0, 0.6)",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(12, 6, 22),
  },
  [theme.breakpoints.down("md")]: {
    boxShadow: "0 12px 42px rgba(0, 0, 0, 0.6)",
    padding: theme.spacing(8, 5, 10),
  },
}));

export const StyledContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  maxWidth: 1200,
  width: "100%",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.primary.contrastText,
  fontSize: 56,
  fontWeight: 500,
  width: "100%",
  textAlign: "center",
  marginBottom: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: 42,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
  },
}));

export const StyledMegaHeader = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.primary.contrastText,
  fontSize: 160,
  fontWeight: 800,
  margin: theme.spacing(0, 0, 10),
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: 110,
    margin: theme.spacing(0, 0, 7),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 90,
    margin: theme.spacing(1, 0, 4),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 50,
    fontWeight: 900,
  },
}));

export const StyledItems = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  gap: 24,
  maxWidth: 250,
  [theme.breakpoints.down("md")]: {},
}));

export const StyledItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: 21,
  color: theme.palette.primary.contrastText,
  gap: 24,
  [theme.breakpoints.down("md")]: {
    fontSize: 18,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const StyledIcon = styled(SvgIcon)(({ theme }) => ({
  width: 24,
  height: 24,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    width: 21,
    height: 21,
  },
  [theme.breakpoints.down("sm")]: {
    width: 18,
    height: 18,
  },
})) as any;
