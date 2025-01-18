import { Box, Link, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(3),
}));

export const StyledLogo = styled(SvgIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  fill: "#000000",
  "&:hover": {
    fill: theme.palette.primary.main,
  },
})) as any;

export const StyledLink = styled(Link)(() => ({
  width: 30,
  height: 30,
})) as typeof Link;
