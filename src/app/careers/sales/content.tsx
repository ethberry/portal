"use client";

import { FC } from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../../components/common/styled";
import { applyMailto } from "../apply";
import { StyledApply, StyledBack, StyledHireList, StyledList, StyledMeta, StyledSection } from "../styled";

const TITLE = "Business Development Manager — Custom Software & AI Services";

export const SalesContent: FC = () => {
  return (
    <Root>
      <StyledBack href="/careers">
        <FormattedMessage id="pages.careers.back" />
      </StyledBack>
      <Typography
        component="h2"
        sx={[
          theme => ({
            ...theme.typography.h4,
            lineHeight: "52px",
          }),
        ]}
      >
        {TITLE}
      </Typography>
      <StyledMeta>
        <FormattedMessage id="pages.careers.remote" />
        {" · "}
        <FormattedMessage id="pages.careers.fullTime" />
        {" · "}
        <FormattedMessage id="pages.careers.contractor" />
      </StyledMeta>
      <Typography>
        We are looking for an experienced Business Development Manager to acquire international clients for custom
        software and AI services. This is an individual-contributor role with direct ownership of the complete sales
        cycle: defining target accounts, generating pipeline, engaging decision-makers, leading discovery, and
        coordinating commercial proposals with delivery and engineering specialists. You will take qualified
        opportunities through negotiation and contract signature, remain involved during project kickoff, and develop
        expansion opportunities after delivery begins.
      </Typography>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.youWillDo" />
        </Typography>
        <StyledList>
          <li>
            Build a qualified pipeline through targeted outbound, referrals, partnerships, professional communities, and
            selected events
          </li>
          <li>
            Research target accounts and engage founders, product leaders, engineering leaders, and decision-makers
          </li>
          <li>
            Lead discovery calls to establish the business problem, stakeholders, budget, timeline, procurement path,
            and delivery fit
          </li>
          <li>
            Work with delivery and technical specialists to define scope, assumptions, estimates, commercial options,
            and delivery models
          </li>
          <li>Prepare and present proposals, statements of work, and commercial terms</li>
          <li>Own follow-up, objection handling, negotiation, and contract signature</li>
          <li>Maintain accurate CRM records, pipeline stages, next steps, and forecasts</li>
          <li>
            Hand signed engagements to delivery with documented expectations and remain involved through kickoff and
            account development
          </li>
          <li>
            Feed client objections, win/loss findings, and market signals back into EthBerry&apos;s positioning and
            service offering
          </li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.lookFor" />
        </Typography>
        <StyledList>
          <li>
            3+ years of B2B sales or business development in custom software, IT services, technology consulting,
            digital agencies, or outsourcing
          </li>
          <li>Demonstrated success generating your own pipeline and closing new business</li>
          <li>
            Experience managing a complete sales cycle from prospecting and discovery to proposal, negotiation, and
            signature
          </li>
          <li>
            Ability to discuss software delivery credibly and conduct technical discovery together with engineering
            specialists
          </li>
          <li>Strong written and spoken English for client communication, proposals, and negotiations</li>
          <li>Experience maintaining disciplined CRM records and reliable forecasts</li>
          <li>
            Ability to work independently in a distributed team and coordinate stakeholders across sales and delivery
          </li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.useful" />
        </Typography>
        <StyledList>
          <li>Experience selling AI, cloud, fintech, mobile, or product-development engagements</li>
          <li>Understanding of time-and-materials, fixed-price, and dedicated-team delivery models</li>
          <li>Experience with HubSpot, Pipedrive, Salesforce, LinkedIn Sales Navigator, or equivalent tools</li>
          <li>Experience developing partner or referral channels</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.offer" />
        </Typography>
        <StyledList>
          <li>Full-remote work with a flexible schedule outside agreed client and team overlap</li>
          <li>Full-time independent-contractor engagement</li>
          <li>14 paid vacation days and 7 paid sick days per year</li>
          <li>Official public holidays in your country of residence in addition to the paid days above</li>
          <li>
            Work from your own laptop; EthBerry provides the project accounts and paid software licences required for
            the role
          </li>
          <li>Compensation agreed individually based on relevant experience and demonstrated results</li>
          <li>
            Direct access to delivery and technical specialists during discovery, scoping, and proposal preparation
          </li>
          <li>The contract does not include health insurance, company hardware, or office-based benefits</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.howWeHire" />
        </Typography>
        <StyledHireList>
          <li>Application review</li>
          <li>
            HR screening — 30 minutes. We discuss relevant experience, English, availability, contractor terms, and
            expectations
          </li>
          <li>
            Deal-history interview — 60 minutes. You walk through one closed opportunity and one lost opportunity,
            including sourcing, qualification, stakeholders, objections, commercial structure, and outcome
          </li>
          <li>
            Live discovery role-play — 60 minutes. We provide the scenario during the call; no take-home preparation is
            required
          </li>
          <li>Final cultural-fit interview — 30 minutes</li>
        </StyledHireList>
      </StyledSection>

      <StyledApply variant="contained" href={applyMailto(TITLE)}>
        <FormattedMessage id="pages.careers.apply" />
      </StyledApply>
    </Root>
  );
};
