"use client";

import { FC } from "react";
import { Grid2 } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { StyledBold } from "../../components/common/styled";
import {
  Root,
  StyledBenefit,
  StyledBenefitDescription,
  StyledBenefitTitle,
  StyledCupImage,
  StyledContent,
  StyledGrid2,
  StyledHeader,
  StyledConfettiImage,
  StyledImageWrapper,
} from "./styled";

export const Benefits: FC = () => {
  return (
    <Root>
      <StyledContent>
        <StyledHeader>
          <FormattedMessage
            id="pages.landing.benefits.title"
            values={{
              b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold>,
            }}
          />
        </StyledHeader>
        <StyledGrid2 container spacing={1}>
          {[1, 2, 3, 4, 5, 6].map(benefit => (
            <Grid2 key={benefit} size={{ xs: 12, sm: 6, lg: 4 }}>
              <StyledBenefit>
                <StyledBenefitTitle>0{benefit}</StyledBenefitTitle>
                <StyledBenefitDescription>
                  <FormattedMessage
                    id={`pages.landing.benefits.items.0${benefit}`}
                    values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold> }}
                  />
                </StyledBenefitDescription>
              </StyledBenefit>
            </Grid2>
          ))}
        </StyledGrid2>
      </StyledContent>
      <StyledImageWrapper>
        <StyledCupImage component="img" src="/landing/benefits/benefits-cup.png" alt="" />
        <StyledConfettiImage component="img" src="/landing/benefits/benefits-cup-confeti.png" alt="" />
      </StyledImageWrapper>
    </Root>
  );
};
