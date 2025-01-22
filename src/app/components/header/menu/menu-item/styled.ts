import { Link, LinkProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface IStyledLinkProps {
  withBackground?: boolean;
  isActive?: boolean;
}

export const StyledLink = styled(Link, { shouldForwardProp: prop => prop !== "withBackground" && prop !== "isActive" })<
  LinkProps & IStyledLinkProps
>(({ theme, isActive, withBackground }) => ({
  fontSize: theme.typography.pxToRem(16),
  fontFamily: "'Montserrat', sans-serif",
  textDecoration: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  background: isActive ? (withBackground ? theme.palette.primary.main : "transparent") : "inherit",
  color: isActive
    ? withBackground
      ? theme.palette.primary.contrastText
      : theme.palette.primary.main
    : theme.palette.text.primary,
  "&:hover": {
    textDecoration: "none",
    background: withBackground ? theme.palette.primary.main : "transparent",
    color: withBackground ? theme.palette.primary.contrastText : theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    marginRight: theme.spacing(1),
    fontSize: theme.typography.pxToRem(14),
  },
})) as any;
