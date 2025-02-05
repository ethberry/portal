"use client";

import { FC, SyntheticEvent, useState } from "react";
import { SvgIcon } from "@mui/material";
import { FormattedMessage } from "react-intl";

import CloseIcon from "./icons//octagon-close.svg";
import {
  Root,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledContent,
  StyledHeader,
} from "./styled";

export const Faq: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Root>
      <StyledHeader>
        <FormattedMessage id="pages.landing.faq.title" />
      </StyledHeader>

      <StyledContent>
        <StyledAccordion
          disableGutters
          elevation={0}
          expanded={expanded === "gemunion"}
          onChange={handleChange("gemunion")}
        >
          <StyledAccordionSummary
            expandIcon={<SvgIcon component={CloseIcon} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Why should I choose small development studio?
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <p>
              In a small development studio, you get all the expertise you need without the bureaucracy that often comes
              with larger outsourcing companies. This allows for faster decision-making, better communication, and a
              more personalized experience. Additionally, small studios tend to offer more competitive pricing due to
              lower operational costs, making them a cost-effective choice without compromising on quality.
            </p>
          </StyledAccordionDetails>
        </StyledAccordion>

        <StyledAccordion disableGutters elevation={0} expanded={expanded === "tms"} onChange={handleChange("tms")}>
          <StyledAccordionSummary
            expandIcon={<SvgIcon component={CloseIcon} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What industries do you specialize in?
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <p>
              We specialize in blockchain, gaming, and AI solutions, but our team’s expertise extends to various
              domains, including edtech, fintech, e-commerce, and more.
            </p>
          </StyledAccordionDetails>
        </StyledAccordion>

        <StyledAccordion
          disableGutters
          elevation={0}
          expanded={expanded === "mechanics"}
          onChange={handleChange("mechanics")}
        >
          <StyledAccordionSummary
            expandIcon={<SvgIcon component={CloseIcon} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What does the development process look like?
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <p>
              We follow an agile methodology, starting with an in-depth consultation, followed by planning, design,
              development, testing, and delivery, keeping you informed at every step.
            </p>
          </StyledAccordionDetails>
        </StyledAccordion>

        <StyledAccordion
          disableGutters
          elevation={0}
          expanded={expanded === "mechanics"}
          onChange={handleChange("mechanics")}
        >
          <StyledAccordionSummary
            expandIcon={<SvgIcon component={CloseIcon} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            How do you ensure project confidentiality?
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <p>
              We sign NDAs and implement strict data protection measures to safeguard your project and sensitive
              information at every stage.
            </p>
          </StyledAccordionDetails>
        </StyledAccordion>
      </StyledContent>
    </Root>
  );
};
