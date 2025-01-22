import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";

export const StyledMenuWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
});

export const StyledMenuTop = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(3),
  color: theme.palette.text.primary,
  fontSize: theme.typography.pxToRem(16),
  textDecoration: "none",
  marginTop: theme.spacing(2),
  "&:hover": {
    textDecoration: "none",
  },
})) as typeof Link;
