"use client";

import { FC } from "react";

import NpmLogo from "./socials/p.svg";
import GithubLogo from "./socials/с.svg";
import LinkedInLogo from "./socials/in.svg";
import FacebookLogo from "./socials/f.svg";
import TelegramLogo from "./socials/t.svg";
// import YoutubeLogo from "./socials/y.svg";
// import DiscordLogo from "./socials/d.svg";
// import MediumLogo from "./socials/m.svg";
import { StyledLink, StyledLogo, StyledWrapper } from "./styled";

export const SocialLinks: FC = () => {
  return (
    <StyledWrapper>
      <StyledLink href="https://www.linkedin.com/company/ethberry" target="_blank">
        <StyledLogo component={LinkedInLogo} viewBox="0 0 30 30" />
      </StyledLink>
      <StyledLink href="https://github.com/ethberry" target="_blank">
        <StyledLogo component={GithubLogo} viewBox="0 0 30 30" />
      </StyledLink>
      <StyledLink href="https://www.facebook.com/ethberry" target="_blank">
        <StyledLogo component={FacebookLogo} viewBox="0 0 30 30" />
      </StyledLink>
      <StyledLink href="https://t.me/oleg_gun" target="_blank">
        <StyledLogo component={TelegramLogo} viewBox="0 0 30 30" />
      </StyledLink>
      <StyledLink href="https://www.npmjs.com/org/ethberry" target="_blank">
        <StyledLogo component={NpmLogo} viewBox="0 0 30 30" />
      </StyledLink>
    </StyledWrapper>
  );
};
