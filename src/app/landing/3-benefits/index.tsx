"use client";

import { FC } from "react";
import { Grid } from "@mui/material";
import { FormattedMessage } from "react-intl";
import Cup from "./images/benefits-cup.png";
import CupConfeti from "./images/benefits-cup-confeti.png";
import Image from "next/image";

import { StyledBold } from "../../components/common/styled";
import {
  Root,
  StyledBenefit,
  StyledBenefitDescription,
  StyledBenefitTitle,
  StyledCupImage,
  StyledContent,
  StyledGrid,
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
        <StyledGrid container spacing={1}>
          {[1, 2, 3, 4, 5, 6].map(benefit => (
            <Grid key={benefit} item xs={12} sm={6} lg={4}>
              <StyledBenefit>
                <StyledBenefitTitle>0{benefit}</StyledBenefitTitle>
                <StyledBenefitDescription>
                  <FormattedMessage
                    id={`pages.landing.benefits.items.0${benefit}`}
                    values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold> }}
                  />
                </StyledBenefitDescription>
              </StyledBenefit>
            </Grid>
          ))}
        </StyledGrid>
      </StyledContent>
      <StyledImageWrapper>
        <StyledCupImage component={Image} src={Cup} alt="" />
        <StyledConfettiImage component={Image} src={CupConfeti} alt="" />
      </StyledImageWrapper>
    </Root>
  );
};
