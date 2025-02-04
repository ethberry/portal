"use client";

import { FC } from "react";
import { Grid2 } from "@mui/material";

import Logo from "./logo.svg";
import { Subscribe } from "./subscribe";
import { ResourcesColumn } from "./resources";
import { CompanyColumn } from "./company";
import { SocialLinks } from "./social";
import {
  Root,
  StyledContent,
  StyledCopyrightWrapper,
  StyledFooterTop,
  StyledLink,
  StyledLinksColumnHeader,
  StyledLinksColumnWrapper,
  StyledLogo,
  StyledLogoWrapper,
  StyledText,
  StyledWrapper,
} from "./styled";

export const Footer: FC = () => {
  return (
    <Root>
      <StyledWrapper>
        <StyledContent>
          <StyledFooterTop container spacing={4}>
            <StyledLogoWrapper size={{ xs: 12, md: 4.5 }}>
              <StyledLogo component={Logo} viewBox="0 0 449.91 95.5" />
            </StyledLogoWrapper>
            <Grid2 size={{ xs: 12, md: 7.5 }} sx={{ display: "flex", gap: 4, justifyContent: "flex-start" }}>
              <StyledLinksColumnWrapper>
                <StyledLinksColumnWrapper>
                  <StyledText>EthBerry LTD</StyledText>
                </StyledLinksColumnWrapper>
                <StyledLinksColumnHeader sx={{ pb: 0 }}>United Arab Emirates, Dubai</StyledLinksColumnHeader>
                <StyledLinksColumnHeader sx={{ pb: 0 }}>42 Blockchain Blvd, 0xCAFE</StyledLinksColumnHeader>
              </StyledLinksColumnWrapper>
            </Grid2>
          </StyledFooterTop>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, sm: 112, md: 4.5 }} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Subscribe />
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 6, md: 2.5 }} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <StyledLinksColumnWrapper>
                <StyledLinksColumnHeader>Powered by</StyledLinksColumnHeader>
                <StyledLink href="https://nestjs.com" target="_blank" rel="noopener noreferrer">
                  NestJS
                </StyledLink>
                <StyledLink href="https://react.dev" target="_blank" rel="noopener noreferrer">
                  React
                </StyledLink>
                <StyledLink href="https://openzeppelin.com" target="_blank" rel="noopener noreferrer">
                  OpenZepplin
                </StyledLink>
              </StyledLinksColumnWrapper>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 2.5 }} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <ResourcesColumn />
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 6, md: 2.5 }} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <CompanyColumn />
            </Grid2>
          </Grid2>
          <Grid2 container sx={{ mt: 6 }}>
            <StyledCopyrightWrapper size={{ xs: 12, md: 3 }} sx={{ justifyContent: "flex-start" }}>
              <StyledLink href={"tel://+971552439497"}>+971 (55) 243-9497</StyledLink>
            </StyledCopyrightWrapper>
            <StyledCopyrightWrapper size={{ xs: 12, md: 6 }} sx={{ justifyContent: "center" }}>
              <SocialLinks />
            </StyledCopyrightWrapper>
            <StyledCopyrightWrapper size={{ xs: 12, md: 3 }} sx={{ textAlign: "right" }}>
              ©{new Date().getFullYear()} EthBerry. All Rights Reserved
            </StyledCopyrightWrapper>
          </Grid2>
        </StyledContent>
      </StyledWrapper>
    </Root>
  );
};
