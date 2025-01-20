"use client";

import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Theme, useMediaQuery } from "@mui/material";

import { StyledBold } from "../../components/common/styled";
import { Root, StyledHeader, StyledPartner, StyledPartners, StyledPartnersList } from "./styled";

const partnersList = [
  [
    {
      logo: "/landing/partners/binance.png",
      link: "https://binance.com",
      alt: "Binance",
    },
    {
      logo: "/landing/partners/polygon.png",
      link: "https://polygon.technology",
      alt: "Polygon",
    },
    {
      logo: "/landing/partners/chainlink.png",
      link: "https://chain.link",
      alt: "Chainlink",
    },
    {
      logo: "/landing/partners/bga.png",
      link: "https://blockchaingamealliance.net",
      alt: "Blockchain Game Alliance",
    },
    {
      logo: "/landing/partners/satoshi.png",
      link: "https://satoshitwenty.one",
      alt: "Satoshi 21",
    },
  ],
  [
    {
      logo: "/landing/partners/memory-os.png",
      link: "https://memoryos.com",
      alt: "MemoryOS",
    },
    {
      logo: "/landing/partners/memoverse.png",
      link: "https://memoverse.io",
      alt: "Memoverse",
    },
    {
      logo: "/landing/partners/fitburn.png",
      link: "https://fitburn.ai",
      alt: "Fitburn",
    },
    {
      logo: "/landing/partners/alphax.png",
      link: "https://www.alphax.fund",
      alt: "AlphaX",
    },
    {
      logo: "/landing/partners/impulse.png",
      link: "https://x.com/impulse_imp",
      alt: "Impulse",
    },
  ],
  [
    {
      logo: "/landing/partners/unicsoft.png",
      link: "https://unicsoft.com",
      alt: "Unicsoft",
    },
    {
      logo: "/landing/partners/red-duck.png",
      link: "https://redduck.io",
      alt: "Redduck",
    },
    {
      logo: "/landing/partners/whimsy-games.png",
      link: "https://whimsygames.co",
      alt: "Whimsy Games",
    },
    {
      logo: "/landing/partners/paktolus.png",
      link: "https://paktolus.com",
      alt: "Paktolus",
    },
    {
      logo: "/landing/partners/noders.png",
      link: "https://noders.team",
      alt: "Noders",
    },
  ],
];

export const Partners: FC = () => {
  const handleClick = (link: string) => () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  const isSmallScreen = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  return (
    <Root>
      <StyledHeader>
        <FormattedMessage
          id="pages.landing.partners.title"
          values={{
            b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold>,
          }}
        />
      </StyledHeader>
      <StyledPartnersList>
        {partnersList.map((partners, i) =>
          isSmallScreen ? (
            partners.map(partner => (
              <StyledPartner
                component="img"
                key={partner.link}
                alt={partner.alt}
                onClick={handleClick(partner.link)}
                src={partner.logo}
              />
            ))
          ) : (
            <StyledPartners key={i}>
              {partners.map(partner => (
                <StyledPartner
                  component="img"
                  key={partner.link}
                  alt={partner.alt}
                  onClick={handleClick(partner.link)}
                  src={partner.logo}
                />
              ))}
            </StyledPartners>
          ),
        )}
      </StyledPartnersList>
    </Root>
  );
};
