"use client";

import { FC } from "react";
import { Box } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import Typewriter from "typewriter-effect";
import Image from "next/image";

import Logo from "./images/logo.png";
import Clouds from "./images/clouds.png";
import { StyledBold } from "../../components/common/styled";
import {
  Root,
  StyledButtonWrapper,
  StyledContent,
  StyledDownloadButton,
  StyledHeroDescription,
  StyledHeroTitle,
  StyledImage,
  StyledButton,
} from "./styled";

export const Hero: FC = () => {
  const { formatMessage } = useIntl();

  const defaultIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function randomize(): string[] {
    const shuffledArray = defaultIndexes.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.map(index => formatMessage({ id: `pages.landing.hero.title.animated${index}` }));
  }

  return (
    <Root>
      <StyledContent>
        <StyledImage component={Image} src={Logo} alt="EthBerry Hero image" />
        <StyledHeroTitle>
          <FormattedMessage id="pages.landing.hero.title.first" />
          <StyledBold sx={{ height: 54 }}>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: [
                  ...randomize(),
                  ...randomize(),
                  ...randomize(),
                  ...randomize(),
                  ...randomize(),
                  ...randomize(),
                ],
              }}
            />
          </StyledBold>
          <FormattedMessage id="pages.landing.hero.title.last" />
        </StyledHeroTitle>
        <StyledHeroDescription>
          <FormattedMessage id="pages.landing.hero.description" />
        </StyledHeroDescription>
        <StyledButtonWrapper>
          <StyledDownloadButton
            id="pitchdeck-button"
            component="a"
            href="https://docsend.com/v/72jjy/ethberry"
            target="_blank"
            size="large"
          >
            <Box component={Image} src={Clouds} sx={{ width: 24, height: 16, mr: 1.7 }} alt="" />
            <FormattedMessage id="pages.landing.hero.downloads.showcases" />
          </StyledDownloadButton>
          <StyledButton
            id="book-a-call-button"
            component="a"
            href="https://calendly.com/trejgun/30min"
            target="_blank"
            size="large"
          >
            <FormattedMessage id="pages.landing.hero.downloads.bookCall" />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledContent>
    </Root>
  );
};
