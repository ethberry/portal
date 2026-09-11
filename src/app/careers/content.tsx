"use client";

import { FC } from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../components/common/styled";
import { StyledJobCard, StyledJobs, StyledMeta } from "./styled";

export const CareersContent: FC = () => {
  return (
    <Root>
      <Typography
        component="h2"
        sx={[
          theme => ({
            ...theme.typography.h4,
            lineHeight: "52px",
          }),
        ]}
      >
        <FormattedMessage id="pages.careers.title" />
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <FormattedMessage id="pages.careers.description" />
      </Typography>
      <StyledJobs>
        <StyledJobCard href="/careers/sales">
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            Business Development Manager — Custom Software & AI Services
          </Typography>
          <StyledMeta>
            <FormattedMessage id="pages.careers.remote" />
            {" · "}
            <FormattedMessage id="pages.careers.fullTime" />
            {" · "}
            <FormattedMessage id="pages.careers.contractor" />
          </StyledMeta>
          <Typography>
            Own new-business acquisition for custom software and AI services, from pipeline generation to signed SOW.
          </Typography>
        </StyledJobCard>
        <StyledJobCard href="/careers/senior-typescript-llm">
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            Senior TypeScript Engineer — LLM Agents
          </Typography>
          <StyledMeta>
            <FormattedMessage id="pages.careers.remote" />
            {" · "}
            <FormattedMessage id="pages.careers.fullTime" />
            {" · "}
            <FormattedMessage id="pages.careers.contractor" />
          </StyledMeta>
          <Typography>
            Design and ship production agents, retrieval pipelines, evaluations, and observable TypeScript services.
          </Typography>
        </StyledJobCard>
        <StyledJobCard href="/careers/senior-typescript-fintech">
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            Senior TypeScript Engineer — Fintech
          </Typography>
          <StyledMeta>
            <FormattedMessage id="pages.careers.remote" />
            {" · "}
            <FormattedMessage id="pages.careers.fullTime" />
            {" · "}
            <FormattedMessage id="pages.careers.contractor" />
          </StyledMeta>
          <Typography>
            Build ledgers, payment services, provider integrations, reconciliation, and operational interfaces.
          </Typography>
        </StyledJobCard>
        <StyledJobCard href="/careers/senior-flutter-developer">
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            Senior Flutter Developer
          </Typography>
          <StyledMeta>
            <FormattedMessage id="pages.careers.remote" />
            {" · "}
            <FormattedMessage id="pages.careers.fullTime" />
            {" · "}
            <FormattedMessage id="pages.careers.contractor" />
          </StyledMeta>
          <Typography>
            Own production Flutter applications from API contract through store release and post-release monitoring.
          </Typography>
        </StyledJobCard>
        <StyledJobCard href="/careers/devops">
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            Senior DevOps Engineer — AWS, Terraform & ECS/Fargate
          </Typography>
          <StyledMeta>
            <FormattedMessage id="pages.careers.remote" />
            {" · "}
            <FormattedMessage id="pages.careers.fullTime" />
            {" · "}
            <FormattedMessage id="pages.careers.contractor" />
          </StyledMeta>
          <Typography>
            Design, provision, deploy, and operate practical AWS environments for Node.js and NestJS services.
          </Typography>
        </StyledJobCard>
      </StyledJobs>
    </Root>
  );
};
