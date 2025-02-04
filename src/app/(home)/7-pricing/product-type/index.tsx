import { FC } from "react";

import { useProductTypes } from "./hook";
import {
  FeaturesWrapper,
  StyledCard,
  StyledCardContent,
  StyledCardsWrapper,
  StyledCardWrapper,
  StyledScrewNut,
  TitleTypography,
} from "./styled";

export interface IProductTypeSelectionProps {
  internal?: boolean;
}

export const ProductTypeSelection: FC<IProductTypeSelectionProps> = () => {
  const productTypes = useProductTypes();

  return (
    <StyledCardsWrapper container justifyContent="center">
      {productTypes.map((type, index) => (
        <StyledCardWrapper size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={index}>
          {type.icons.map(icon => (
            <StyledScrewNut component="img" src={icon.src} sx={icon.sx} key={icon.src} />
          ))}
          <StyledCard>
            <StyledCardContent>
              <TitleTypography variant="h6">{type.title}</TitleTypography>
              <FeaturesWrapper>{type.text}</FeaturesWrapper>
            </StyledCardContent>
          </StyledCard>
        </StyledCardWrapper>
      ))}
    </StyledCardsWrapper>
  );
};
