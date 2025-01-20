"use client";

import { FC } from "react";
import { FormattedMessage } from "react-intl";

import { StyledBold } from "../../components/common/styled";
import { Root, StyledContent, StyledHeader, StyledMegaHeader } from "./styled";

export const Nfts: FC = () => {
  return (
    <Root>
      <StyledContent>
        <StyledHeader>
          <FormattedMessage id="pages.landing.nfts.title" values={{ b: chunks => <StyledBold>{chunks}</StyledBold> }} />
        </StyledHeader>

        <StyledMegaHeader>
          <FormattedMessage id="pages.landing.nfts.megaTitle" />
        </StyledMegaHeader>

        <div style={{ height: 400 }} />
      </StyledContent>
    </Root>
  );
};
