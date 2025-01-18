"use client";

import { FC } from "react";
import { Grid, Hidden, useScrollTrigger } from "@mui/material";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Logo from "./logo.svg";
import { StyledAppBar, StyledLink, StyledLogo, StyledToolbar } from "./styled";

export const Header: FC = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <StyledAppBar position="fixed" elevation={scrolled ? 1 : 0}>
      <StyledToolbar scrolled={scrolled}>
        <Grid container>
          <Grid item xs={12} md={5} justifyContent="space-between" sx={{ display: "flex", alignItems: "center" }}>
            <Hidden mdDown>{/*<Menu />*/}</Hidden>
            <Hidden mdUp>
              <StyledLink component={Link} href="/">
                <StyledLogo scrolled={scrolled} viewBox="0 0 500 100">
                  <Logo />
                </StyledLogo>
              </StyledLink>

              {/*<MobileMenu />*/}
            </Hidden>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} md={3.5} justifyContent="flex-start" sx={{ display: "flex", alignItems: "center" }}>
              <StyledLink component={Link} href="/">
                <StyledLogo scrolled={scrolled} viewBox="0 0 449.91 95.5">
                  <Logo />
                </StyledLogo>
              </StyledLink>
            </Grid>
            <Grid item xs={12} md={3.5} justifyContent="flex-end" sx={{ display: "flex", alignItems: "center" }}>
              {/*<Localization languages={Object.values(EnabledLanguages)} />*/}
              <ConnectButton />
              {/*<Sections />*/}
            </Grid>
          </Hidden>
        </Grid>
      </StyledToolbar>
    </StyledAppBar>
  );
};
