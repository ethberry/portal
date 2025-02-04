import { Box, Grid2, Link, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(7),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(3),
  },
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#090a0c",
  color: theme.palette.primary.contrastText,
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
  maxWidth: 1920,
  borderRadius: "16px 16px 0 0",
  padding: theme.spacing(9, 8, 3),
  width: "100%",
  [theme.breakpoints.down("md")]: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    padding: theme.spacing(7, 5, 2),
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    padding: theme.spacing(5, 3, 2),
  },
}));

export const StyledContent = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  padding: theme.spacing(0, 1),
  width: "100%",
  margin: "0 auto",
}));

export const StyledLinksColumnWrapper = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    marginRight: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
  },
}));

export const StyledLinksColumnHeader = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  opacity: 0.4,
}));

export const StyledFooterTop = styled(Grid2)(({ theme }) => ({
  marginBottom: theme.spacing(9),
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(4),
  },
}));

export const StyledLogoWrapper = styled(Grid2)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {},
}));

export const StyledCopyrightWrapper = styled(Grid2)(({ theme }) => ({
  ...theme.typography.caption,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  opacity: 0.4,
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const StyledLogo = styled(SvgIcon)(({ theme }) => ({
  width: 141,
  height: 30,
  [theme.breakpoints.down("md")]: {
    width: 141,
    height: 30,
  },
})) as any;

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(0.5),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  cursor: "pointer",
  marginBottom: theme.spacing(0.5),
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
})) as typeof Link;
