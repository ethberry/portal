import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(10),
  padding: theme.spacing(37, 3, 3),
  background: "url('/landing/hero/hero-bg.png') center no-repeat",
  backgroundSize: "cover",
  borderRadius: theme.spacing(3),
  overflow: "hidden",
  boxShadow: "5px 16px 42px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(15, 3, 3),
    backgroundPositionX: "left",
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
}));

export const StyledContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  margin: theme.spacing(0, "20%"),
  width: "50%",
  [theme.breakpoints.down("lg")]: {
    width: "52%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: theme.spacing(0, "auto"),
    alignItems: "center",
    textAlign: "center",
  },
}));

export const StyledImage = styled(Box)(({ theme }) => ({
  width: 65,
  height: 65,
  marginBottom: theme.spacing(3),
  justifySelf: "flex-start",
})) as typeof Box;

export const StyledButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 48,
  alignItems: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: theme.spacing(5),
    gap: 32,
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(3),
    gap: 16,
  },
}));

export const StyledDownloadButton = styled(Button)(({ theme }) => ({
  background: "url('/landing/hero/download-button.png') center no-repeat",
  backgroundSize: "cover",
  color: theme.palette.primary.contrastText,
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 14,
  fontWeight: 400,
  letterSpacing: 1.5,
  lineHeight: 1.74,
  padding: "12.1px 22.9px",
  marginBottom: theme.spacing(2),
  boxShadow: "0px 30px 20px rgba(0, 0, 0, 0.25)",
  borderRadius: theme.spacing(1.5),
  "&:hover": {
    background: "url('/landing/hero/download-button-pressed.png') center no-repeat",
    backgroundSize: "cover",
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: theme.spacing(1.5),
    boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.25)",
  },
  [theme.breakpoints.down("sm")]: {
    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
    fontSize: 12,
    lineHeight: 1.76,
  },
  "& .MuiButton-endIcon": {
    svg: {
      fontSize: 30,
    },
  },
})) as typeof Button;

export const StyledButton = styled(Button)(({ theme }) => ({
  border: "0 solid #1976d2",
  outline: "0 solid #1976d2",
  borderRadius: theme.spacing(0),
  lineHeight: 1,
  color: theme.palette.text.primary,
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 14,
  fontWeight: 400,
  padding: theme.spacing(0, 0, 0.1),
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.text.primary}`,
  "&:hover": {
    outlineWidth: 0,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
  "& .MuiButton-endIcon": {
    svg: {
      fontSize: 30,
    },
  },
})) as typeof Button;

export const StyledHeroTitle = styled(Box)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 45,
  fontWeight: 400,
  lineHeight: 1.2,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    fontSize: 41,
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 36,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
  },
}));

export const StyledHeroDescription = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#6a6a6a",
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(7),
  maxWidth: "80%",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    paddingRight: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
