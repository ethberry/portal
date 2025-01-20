import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
  background: "url('/landing/pricing/pricing-bg.jpg') center no-repeat",
  backgroundSize: "cover",
  borderRadius: theme.spacing(3),
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(5),
  padding: theme.spacing(8, 8, 14),
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 1, 4),
  },
}));

export const StyledCog1 = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: 301,
  height: 345,
  top: "45%",
  left: 0,
  transform: "translateX(-50%) scale(0.9)",
  zIndex: 999,
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
})) as typeof Box;

export const StyledCog2 = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: 277,
  height: 236,
  top: 0,
  right: 0,
  transform: "translate(60%,-20%)",
  zIndex: 999,
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
})) as typeof Box;

export const StyledCog3 = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: 411,
  height: 452,
  bottom: 0,
  right: 0,
  transform: "translate(-21%,28%)",
  zIndex: 999,
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
})) as typeof Box;

export const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: 56,
  fontWeight: 400,
  margin: theme.spacing(7, 2),
  color: theme.palette.primary.contrastText,
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: 42,
    lineHeight: 1.2,
    margin: theme.spacing(1, 2, 6),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 36,
    margin: theme.spacing(1, 1, 4),
  },
}));
