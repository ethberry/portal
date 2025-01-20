import { FC } from "react";

import { Hero } from "./1-hero";
import { Advantages } from "./2-advantages";
import { Benefits } from "./3-benefits";
import { Testimonials } from "./4-testimonials";
import { Nfts } from "./5-nfts";
import { Partners } from "./6-partners";
import { Pricing } from "./7-pricing";
import { Faq } from "./8-faq";
import { Root } from "./styled";

export const Landing: FC = () => {
  return (
    <Root>
      <Hero />
      <Advantages />
      <Benefits />
      <Testimonials />
      <Nfts />
      <Partners />
      <Pricing />
      <Faq />
    </Root>
  );
};
