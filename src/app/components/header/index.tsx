"use client";

import { FC } from "react";
import { Grid, useScrollTrigger } from "@mui/material";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Logo from "./logo.svg";
import { StyledAppBar, StyledLink, StyledLogo, StyledToolbar } from "./styled";
import { Menu } from "./menu";
import { MobileMenu } from "./mobile-menu";

export const Header: FC = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <StyledAppBar position="fixed" elevation={scrolled ? 1 : 0}>
      <StyledToolbar scrolled={scrolled}>
        <Grid container style={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 5 }} justifyContent="space-between" sx={{ display: "flex", alignItems: "center" }}>
            <Menu />

            <StyledLink component={Link} href="/" sx={{ display: { xs: "flex", md: "none" } }}>
              <StyledLogo scrolled={scrolled} viewBox="0 0 500 100">
                <Logo />
              </StyledLogo>
            </StyledLink>

            <MobileMenu />
          </Grid>
          <Grid
            size={{ xs: 12, md: 3.5 }}
            justifyContent="flex-start"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <StyledLink component={Link} href="/">
              <StyledLogo scrolled={scrolled} viewBox="0 0 500 100">
                <Logo />
              </StyledLogo>
            </StyledLink>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3.5 }}
            justifyContent="flex-end"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {/*<Localization languages={Object.values(EnabledLanguages)} />*/}
            <ConnectButton />
            {/*<Sections />*/}
          </Grid>
        </Grid>
      </StyledToolbar>
    </StyledAppBar>
  );
};
