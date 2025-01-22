import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

export const StyledLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(3),
  fontFamily: "'Montserrat', sans-serif",
  color: theme.palette.text.primary,
  fontSize: theme.typography.pxToRem(16),
  borderRadius: theme.spacing(1),
  textDecoration: "none",
  marginTop: theme.spacing(2),
  "&:hover": {
    textDecoration: "none",
  },
})) as typeof Link;
