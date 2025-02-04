"use client";

import { AppBar, Link, SvgIcon, SvgIconProps, Toolbar, ToolbarProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface IScrolledProps {
  scrolled?: boolean;
}

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0, 4),
  margin: theme.spacing(0, "auto"),
  color: theme.palette.text.primary,
  display: "flex",
  justifyContent: "center",
  width: "auto",
  left: theme.spacing(8),
  right: theme.spacing(8),
  maxWidth: 1920,
  borderRadius: "0 0 16px 16px",
  [theme.breakpoints.down("lg")]: {
    left: 0,
    right: 0,
    width: "100%",
    padding: 0,
    margin: "auto",
  },
}));

export const StyledToolbar = styled(Toolbar, { shouldForwardProp: prop => prop !== "scrolled" })<
  ToolbarProps & IScrolledProps
>(({ scrolled, theme }) => ({
  "&.MuiToolbar-root": {
    minHeight: scrolled ? 64 : 108,
    maxWidth: 1920,
    width: "100%",
    margin: theme.spacing(scrolled ? 0 : 1, "auto"),
    justifyContent: "space-between",
    "&": {
      transition: "all 0.2s linear",
    },
  },
  [theme.breakpoints.down("md")]: {
    "&.MuiToolbar-root": {
      minHeight: 64,
      margin: theme.spacing(0, "auto"),
      justifyContent: "flex-start",
    },
  },
}));

export const StyledLogo = styled(SvgIcon, { shouldForwardProp: prop => prop !== "scrolled" })<
  SvgIconProps & IScrolledProps
>(({ scrolled, theme }) => ({
  width: scrolled ? 162 : 241,
  height: scrolled ? 35 : 52,
  transition: "all 0.2s linear",
  [theme.breakpoints.down("lg")]: {
    width: 162,
    height: 35,
  },
  [theme.breakpoints.down("md")]: {
    width: 140,
    height: 30,
  },
})) as any;

export const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: 40,
  marginRight: theme.spacing(1),
  color: theme.palette.text.primary,
})) as typeof Link;
