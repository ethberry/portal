"use client";

import { FC } from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import TopRightCog from "./images/outside-screw-nut-top-right.png";
import MiddleLeftCog from "./images/outside-screw-nut-middle-left.png";
import BottomRightCog from "./images/outside-screw-nut-bottom-right.png";

import { StyledBold } from "../../components/common/styled";
import { ProductTypeSelection } from "./product-type";
import { Root, StyledCog1, StyledCog2, StyledCog3, StyledHeader } from "./styled";

export const Pricing: FC = () => {
  return (
    <Root>
      <StyledHeader>
        <FormattedMessage
          id="pages.landing.pricing.description"
          values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold> }}
        />
      </StyledHeader>

      <StyledCog1 component={Image} alt="pricing cog icon" src={MiddleLeftCog} />
      <StyledCog2 component={Image} alt="pricing cog icon" src={TopRightCog} />
      <StyledCog3 component={Image} alt="pricing cog icon" src={BottomRightCog} />

      <ProductTypeSelection />
    </Root>
  );
};
